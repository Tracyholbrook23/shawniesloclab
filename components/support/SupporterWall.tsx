"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { formatUsd } from "@/lib/supportConfig";

interface SupporterEntry {
  name: string;
  message: string;
  amountCents: number;
  at: string;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "AN";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function SupporterWall() {
  const [wall, setWall] = useState<SupporterEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/goal", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setWall(data.wall ?? []);
      })
      .catch(() => {
        if (!cancelled) setWall([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const entries = wall ?? [];

  return (
    <section className="py-24 bg-[#1B0F16] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] font-bold mb-2.5">
            Thank You
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-lg mb-11">
            Every name here got me closer.
          </h2>
        </FadeIn>

        {entries.length === 0 ? (
          <FadeIn delay={0.16}>
            <div className="bg-white/[0.04] border border-white/10 p-8 max-w-md">
              <p className="text-sm text-white/70 leading-relaxed m-0">
                {wall === null
                  ? "Loading…"
                  : "No contributions yet. Be the first to help write the next chapter."}
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4.5">
            {entries.map((entry, i) => (
              <FadeIn key={`${entry.name}-${entry.at}-${i}`} delay={i * 0.06}>
                <div className="bg-white/[0.04] border border-white/10 p-6 flex flex-col gap-4 h-full">
                  <p className="text-sm leading-relaxed text-white/85 italic flex-1 m-0">
                    {entry.message
                      ? `"${entry.message}"`
                      : `Gave ${formatUsd(entry.amountCents)} toward the goal.`}
                  </p>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#E0448E] flex items-center justify-center text-[11px] font-bold shrink-0">
                      {initials(entry.name)}
                    </div>
                    <p className="text-xs font-bold m-0">{entry.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
