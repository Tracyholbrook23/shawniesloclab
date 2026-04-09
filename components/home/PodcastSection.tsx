import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function PodcastSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-4 items-center">

        {/* Text Content */}
        <div className="relative z-10 md:-mr-8">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
              The Podcast
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              LOC'd Down<br />at the Lab
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Unfiltered conversations about loc care, hair health,
              business, and the culture. New episodes every week.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button variant="pink" href="/podcast">
              Watch Episodes
            </Button>
          </FadeIn>
        </div>

        {/* Image — editorial, blended into dark bg */}
        <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[3/4]">
          {/* Pink glow behind subject */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(244,114,182,0.15) 0%, rgba(0,0,0,0) 65%)",
            }}
          />
          <Image
            src="/images/shawnie/podcast-shawnie.jpeg"
            alt="Shawnie — host of LOC'd Down at the Lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Left-edge black fade — bleeds into text column */}
          <div
            className="absolute inset-y-0 left-0 w-28 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
            }}
          />
        </FadeIn>

      </div>
    </section>
  );
}
