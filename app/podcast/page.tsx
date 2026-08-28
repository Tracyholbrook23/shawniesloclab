import OrganicLoader from "@/components/ui/OrganicLoader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast · Shawnie's Loc Lab",
  description:
    "LOC'd Down at the Lab: unfiltered conversations about loc care, hair health, business, and culture. Coming soon.",
};

export default function PodcastPage() {
  return (
    <main
      className="relative flex-1 flex items-center justify-center overflow-hidden bg-[#FBF3F8] px-6"
      style={{ minHeight: "80vh" }}
    >
      <OrganicLoader />
      <div className="relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#A81458] font-bold mb-4">
          The Lab Podcast
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-[#180D14] mb-4">
          Coming Soon
        </h1>
        <p className="text-sm md:text-base text-[#6B5560] max-w-md mx-auto leading-relaxed">
          LOC&apos;d Down at the Lab is on its way, with conversations about locs, culture, and everything in between.
        </p>
      </div>
    </main>
  );
}
