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

      {/* Full-bleed image — no side padding, edge to edge */}
      <FadeIn>
        <div className="relative w-full aspect-[16/8] md:aspect-[21/8]">
          {/* Subtle pink atmospheric glow */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(244,114,182,0.07) 0%, rgba(255,255,255,0) 60%)",
            }}
          />
          <Image
            src="/images/shawnie/group-clients.jpeg"
            alt="Shawnie and her clients — the Loc Lab crew"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Top fade — bleeds from section above */}
          <div
            className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          {/* Bottom fade — bleeds into stats below */}
          <div
            className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          {/* Headline overlaid on image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-3">
                The Community
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight drop-shadow-sm">
                Built different.<br />Proven by results.
              </h2>
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
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
