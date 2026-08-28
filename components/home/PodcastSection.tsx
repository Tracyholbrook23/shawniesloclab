import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function PodcastSection() {
  return (
    <section className="relative bg-[#fdf8fb] overflow-hidden">

      {/* Soft pink ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(244,114,182,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center py-24 md:py-32">

        {/* Left — Text */}
        <div>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
              The Podcast
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
              LOC'd Down<br />at the Lab
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
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

        {/* Right — Image, editorial and light */}
        <FadeIn direction="left" delay={0.15} className="relative w-full aspect-[3/4]">
          {/* Very subtle pink glow behind subject */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 55% 30%, rgba(244,114,182,0.09) 0%, transparent 55%)",
            }}
          />
          <Image
            src="/images/shawnie/podcast-shawnie.jpeg"
            alt="Shawnie, host of LOC'd Down at the Lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Left edge — soft dissolve into section bg */}
          <div
            className="absolute inset-y-0 left-0 w-14 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(253,248,251,0) 0%, rgba(253,248,251,0.9) 100%)",
            }}
          />
          {/* Bottom edge */}
          <div
            className="absolute bottom-0 inset-x-0 h-14 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(253,248,251,0) 0%, rgba(253,248,251,0.85) 100%)",
            }}
          />
        </FadeIn>

      </div>
    </section>
  );
}
