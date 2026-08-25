import { NextResponse } from "next/server";
import { getGoalState } from "@/lib/goalStore";

export const runtime = "nodejs";
// This is the live source of truth for the progress bar — never cache it.
export const dynamic = "force-dynamic";

export async function GET() {
  const state = await getGoalState();
  return NextResponse.json(state);
}
