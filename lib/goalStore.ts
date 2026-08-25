import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";
import { SUPPORT_GOAL_CENTS } from "@/lib/supportConfig";

export interface SupporterEntry {
  name: string; // "Anonymous" when left blank at checkout
  message: string; // "" when left blank
  amountCents: number;
  at: string; // ISO timestamp
}

export interface GoalState {
  goalCents: number;
  raisedCents: number;
  supporterCount: number;
  wall: SupporterEntry[]; // most recent first, capped at WALL_MAX_ENTRIES
}

const KEY_RAISED = "support:raisedCents";
const KEY_COUNT = "support:supporterCount";
const KEY_WALL = "support:wall";
const WALL_MAX_ENTRIES = 12;

function getRedis(): Redis | null {
  // Accept either Upstash's own env var names or the KV_REST_API_*
  // names some Vercel Marketplace Redis integrations inject (Vercel KV
  // itself was retired in favor of Marketplace Redis integrations —
  // see .env.example for exactly what to add).
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// --- Local dev fallback -------------------------------------------------
// Used only when no Redis integration is configured yet (e.g. running
// `npm run dev` before the Vercel Marketplace Redis add-on is wired up).
// This is NOT safe for production: serverless function instances don't
// share a filesystem, so totals would reset/fork across invocations.
// Add a Redis integration (Vercel dashboard -> Storage -> Marketplace ->
// search "Redis", e.g. Upstash) before this ever handles a real payment.
const DEV_STORE_PATH = path.join(process.cwd(), ".data", "support-goal.json");

interface DevStore {
  raisedCents: number;
  supporterCount: number;
  wall: SupporterEntry[];
}

const EMPTY_DEV_STORE: DevStore = { raisedCents: 0, supporterCount: 0, wall: [] };

async function readDevStore(): Promise<DevStore> {
  try {
    const raw = await fs.readFile(DEV_STORE_PATH, "utf8");
    return JSON.parse(raw) as DevStore;
  } catch {
    return { ...EMPTY_DEV_STORE };
  }
}

async function writeDevStore(store: DevStore): Promise<void> {
  await fs.mkdir(path.dirname(DEV_STORE_PATH), { recursive: true });
  await fs.writeFile(DEV_STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export async function getGoalState(): Promise<GoalState> {
  const redis = getRedis();

  if (redis) {
    const [raisedCents, supporterCount, wall] = await Promise.all([
      redis.get<number>(KEY_RAISED),
      redis.get<number>(KEY_COUNT),
      redis.get<SupporterEntry[]>(KEY_WALL),
    ]);
    return {
      goalCents: SUPPORT_GOAL_CENTS,
      raisedCents: raisedCents ?? 0,
      supporterCount: supporterCount ?? 0,
      wall: wall ?? [],
    };
  }

  const dev = await readDevStore();
  return {
    goalCents: SUPPORT_GOAL_CENTS,
    raisedCents: dev.raisedCents,
    supporterCount: dev.supporterCount,
    wall: dev.wall,
  };
}

// Called only from the Stripe webhook after a verified, paid checkout —
// never from a user-facing route.
export async function recordDonation(entry: SupporterEntry): Promise<void> {
  const redis = getRedis();

  if (redis) {
    await Promise.all([
      redis.incrby(KEY_RAISED, entry.amountCents),
      redis.incr(KEY_COUNT),
    ]);
    // Best-effort, non-atomic update of the recent-supporters wall — on
    // the rare chance two donations complete in the same instant, one
    // wall entry could be dropped. The raised total and supporter count
    // above (atomic INCRBY/INCR) are never affected by that.
    const wall = (await redis.get<SupporterEntry[]>(KEY_WALL)) ?? [];
    await redis.set(KEY_WALL, [entry, ...wall].slice(0, WALL_MAX_ENTRIES));
    return;
  }

  const dev = await readDevStore();
  dev.raisedCents += entry.amountCents;
  dev.supporterCount += 1;
  dev.wall = [entry, ...dev.wall].slice(0, WALL_MAX_ENTRIES);
  await writeDevStore(dev);
}
