import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* Subtle pink gradient behind text — left side only */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[55%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(224,68,142,0.07) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] gap-10 md:gap-6 items-center">

        {/* Text Content */}
        <div className="md:pr-8">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-4">
              Meet the Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#180D14] leading-tight mb-6">
              Hi, I'm Shawnie.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-4 text-[#6B5560] leading-relaxed max-w-sm">
              <p>
                I'm a loc specialist, educator, and entrepreneur based in
                Lansing, Michigan — right on the campus of Michigan State
                University. What started as a passion for natural hair turned
                into a full-on movement — one client, one loc, one formula
                at a time.
              </p>
              <p>
                At Shawnie's Loc Lab, I combine technique with science to
                deliver results that last. Every service is intentional.
                Every product is tested. Every client leaves feeling like
                themselves — just elevated.
              </p>
              <p>
                Beyond the chair, I educate, I podcast, I stream, and I
                build. This lab is bigger than hair. It's a lifestyle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8">
              <Button variant="pink" href="/about">
                Full Story
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Image — tighter crop, connected to layout */}
        <FadeIn direction="left" delay={0.15} className="relative w-full aspect-[3/4]">

          {/* Faint depth glow behind subject */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 55% 30%, rgba(224,68,142,0.10) 0%, rgba(255,255,255,0) 55%)",
            }}
          />

          <Image
            src="/images/shawnie/about-shawnie.jpeg"
            alt="Shawnie — founder of Shawnie's Loc Lab"
            fill
            className="object-cover object-[center_15%]"
            sizes="(max-width: 768px) 100vw, 480px"
          />

          {/* Left-edge only — light dissolve into text */}
          <div
            className="absolute inset-y-0 left-0 w-14 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(251,243,248,0.85) 100%)",
            }}
          />
        </FadeIn>

      </div>
    </section>
  );
}
