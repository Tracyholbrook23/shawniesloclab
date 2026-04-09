import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const pillars = [
  {
    label: "Precision",
    description:
      "Every loc is treated with intention. No guesswork — just expert hands and proven technique.",
  },
  {
    label: "Science",
    description:
      "Hair health starts at the scalp. Formulas, methods, and results you can see.",
  },
  {
    label: "Culture",
    description:
      "Locs aren't just hair. They're identity, legacy, and art — and we treat them that way.",
  },
];

export default function WhySection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-4 items-center">

        {/* Image — editorial, blended */}
        <FadeIn direction="right" className="relative w-full aspect-[3/4]">
          {/* Pink glow behind subject */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(244,114,182,0.12) 0%, rgba(255,255,255,0) 65%)",
            }}
          />
          <Image
            src="/images/shawnie/why-shawnie.jpeg"
            alt="Shawnie holding scissors — the craft behind the lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Right-edge white fade — bleeds into text column */}
          <div
            className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
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

        {/* Text Content */}
        <div className="md:-ml-8 relative z-10">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
              Why the Lab
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 leading-tight">
              This isn't a salon.<br />It's a lab.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
              Shawnie's Loc Lab was built on the belief that natural hair care
              deserves the same precision and rigor as any science. Every
              appointment is a formula. Every result is by design.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.label} delay={0.4 + i * 0.1}>
                <div className="flex gap-5">
                  <div className="w-px bg-[#F472B6] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold tracking-widest uppercase text-black mb-1">
                      {pillar.label}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
