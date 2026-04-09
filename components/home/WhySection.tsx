import Image from "next/image";

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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
          <Image
            src="/images/shawnie/why-shawnie.jpeg"
            alt="Shawnie holding scissors — the craft behind the lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
            Why the Lab
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 leading-tight">
            This isn't a salon.<br />It's a lab.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
            Shawnie's Loc Lab was built on the belief that natural hair care
            deserves the same precision and rigor as any science. Every
            appointment is a formula. Every result is by design.
          </p>

          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="flex gap-5">
                <div className="w-px bg-black shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-black mb-1">
                    {pillar.label}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
