import OrganicLoader from "@/components/ui/OrganicLoader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Live — Shawnie's Loc Lab",
  description:
    "Live sessions, styling breakdowns, and behind-the-scenes at the lab on Twitch. Coming soon.",
};

export default function WatchPage() {
  return (
    <main
      className="relative flex-1 flex items-center justify-center overflow-hidden bg-[#1B0F16] px-6"
      style={{ minHeight: "80vh" }}
    >
      <OrganicLoader />
      <div className="relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] font-bold mb-4">
          Twitch · Watch Live
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-sm md:text-base text-white/65 max-w-md mx-auto leading-relaxed">
          Live sessions, styling breakdowns, and behind-the-scenes at the lab — dropping soon.
        </p>
      </div>
    </main>
  );
}
