import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "7+", label: "Years of Experience" },
  { value: "100%", label: "Natural Methods" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#FCE7F1] overflow-hidden py-20">

      {/* Header — above the image, not overlaid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#A81458] font-bold mb-2.5">
            The Community
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#180D14] leading-tight max-w-lg">
            Built different.<br />Proven by results.
          </h2>
        </FadeIn>
      </div>

      {/* Group image — full-bleed, strong and readable */}
      <FadeIn delay={0.1}>
        <div className="relative w-full aspect-[16/8] md:aspect-[21/8]">
          <Image
            src="/images/shawnie/group-clients.jpeg"
            alt="Shawnie and her clients, the Loc Lab crew"
            fill
            className="object-cover object-[center_26%]"
            sizes="100vw"
          />
          {/* Very subtle bottom-only fade — just enough to connect to stats */}
          <div
            className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(252,231,241,0.6) 100%)",
            }}
          />
        </div>
      </FadeIn>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        <div className="grid grid-cols-3 gap-8 border-t border-[#E0448E]/20 pt-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-[#180D14] mb-1.5">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#8A7580]">
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
