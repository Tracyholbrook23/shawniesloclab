import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function ComingFromLabSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] mb-2.5 font-bold">
            Coming From the Lab
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-lg mb-11">
            Products and guides, in the works.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* SLL Scalp Formulas */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative overflow-hidden flex items-end" style={{ minHeight: 320 }}>
              <Image
                src="/images/shawnie/product-formula-1.jpeg"
                alt="SLL scalp formulas"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(27,15,22,0.82) 0%, rgba(27,15,22,0.1) 55%)" }}
              />
              <div className="relative z-10 p-7 w-full">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#F0A8CE] font-bold mb-2.5">
                  Hair Care · Coming Soon
                </p>
                <h3 className="text-[22px] font-extrabold text-white mb-2.5">SLL Scalp Formulas</h3>
                <p className="text-[13px] text-white/75 leading-relaxed max-w-xs">
                  Science-backed formulas built for loc health, developed in the lab and tested by the community.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Loc Lab Library teaser */}
          <FadeIn direction="left" delay={0.15}>
            <div className="bg-[#FCE7F1] border border-[#E0448E]/20 p-10 flex flex-col justify-center h-full">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#A81458] font-bold mb-2.5">
                Digital Products · Coming Soon
              </p>
              <h3 className="text-[22px] font-extrabold mb-2.5">Loc Lab Library</h3>
              <p className="text-[13px] text-[#6B5560] leading-relaxed max-w-sm mb-5">
                E-books, care guides, and digital tools for loc wearers and locticians, built by Shawnie.
              </p>
              <a
                href="/library"
                className="inline-flex items-center px-[22px] py-[11px] bg-[#180D14] text-white rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:opacity-85 transition-opacity duration-200 self-start"
              >
                Explore Library
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
