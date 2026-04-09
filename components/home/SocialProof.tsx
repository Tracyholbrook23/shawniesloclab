import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "7+", label: "Years of Experience" },
  { value: "100%", label: "Natural Methods" },
];

export default function SocialProof() {
  return (
    <section className="bg-white overflow-hidden">

      {/* Header — above the image, not overlaid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-4">
            The Community
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight max-w-lg">
            Built different.<br />Proven by results.
          </h2>
        </FadeIn>
      </div>

      {/* Group image — full-bleed, strong and readable */}
      <FadeIn delay={0.1}>
        <div className="relative w-full aspect-[16/8] md:aspect-[21/8]">
          <Image
            src="/images/shawnie/group-clients.jpeg"
            alt="Shawnie and her clients — the Loc Lab crew"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Very subtle bottom-only fade — just enough to connect to stats */}
          <div
            className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 100%)",
            }}
          />
        </div>
      </FadeIn>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-10">
        <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase text-gray-400">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  );
}
