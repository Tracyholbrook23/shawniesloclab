import type { Metadata } from "next";
import SupportHero from "@/components/support/SupportHero";
import GoalTracker from "@/components/support/GoalTracker";
import WhyItMatters from "@/components/support/WhyItMatters";
import SupporterWall from "@/components/support/SupporterWall";
import ClosingCta from "@/components/support/ClosingCta";

export const metadata: Metadata = {
  title: "Support My Cosmetology Journey — Shawnie's Loc Lab",
  description:
    "Help Shawnie fund her cosmetology education — see the goal, what's raised so far, and everyone who's chipped in.",
};

export default function SupportPage() {
  return (
    <main>
      <SupportHero />
      <GoalTracker />
      <WhyItMatters />
      <SupporterWall />
      <ClosingCta />
    </main>
  );
}
