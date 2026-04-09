import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-4 items-center">

        {/* Text Content */}
        <div className="relative z-10 md:-mr-8">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
              Meet the Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-8">
              Hi, I'm Shawnie.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-5 text-gray-500 leading-relaxed max-w-md">
              <p>
                I'm a loc specialist, educator, and entrepreneur based in Lansing, Michigan —
                right on the campus of Michigan State University.
                What started as a passion for natural hair turned into a full-on
                movement — one client, one loc, one formula at a time.
              </p>
              <p>
                At Shawnie's Loc Lab, I combine technique with science to deliver
                results that last. Every service is intentional. Every product is
                tested. Every client leaves feeling like themselves — just elevated.
              </p>
              <p>
                Beyond the chair, I educate, I podcast, I stream, and I build. This
                lab is bigger than hair. It's a lifestyle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Button variant="pink" href="/about">
                Full Story
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Image — editorial, blended */}
        <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[3/4]">
          {/* Pink glow behind subject */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(244,114,182,0.12) 0%, rgba(255,255,255,0) 65%)",
            }}
          />
          <Image
            src="/images/shawnie/about-shawnie.jpeg"
            alt="Shawnie — founder of Shawnie's Loc Lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Left-edge white fade — bleeds into text column */}
          <div
            className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
        </FadeIn>

      </div>
    </section>
  );
}
