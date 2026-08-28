import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loc Lab Library · Shawnie's Loc Lab",
  description:
    "E-books, guides, and digital products for loc lovers. Built by Shawnie. Backed by science.",
};

const categories = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0448E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "E-Books",
    description: "In-depth guides on loc installation, maintenance, and scalp health, written by Shawnie.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0448E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M9 3v7l-4.5 9A2 2 0 0 0 6.5 22h11a2 2 0 0 0 2-1l-4.5-9V3" />
        <line x1="6" y1="14" x2="18" y2="14" />
      </svg>
    ),
    title: "Formulas & Guides",
    description: "Step-by-step care guides, product routines, and lab-tested formulas for every loc type.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0448E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Digital Products",
    description: "Templates, checklists, and tools for locticians and loc wearers who want to level up.",
  },
];

export default function LibraryPage() {
  return (
    <main className="bg-transparent text-[#180D14]">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-5">
            Digital Products
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
            Loc Lab<br />Library
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#6B5560] max-w-lg leading-relaxed text-lg">
            E-books, guides, and digital tools built by Shawnie for loc wearers and locticians who want real knowledge, not generic advice. The Library is in the works, and here&apos;s what&apos;s launching first.
          </p>
        </FadeIn>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.1}>
                <div className="relative bg-white border border-gray-100 p-8 hover:border-[#E0448E] transition-colors duration-300">
                  <span className="absolute top-5 right-5 text-[10px] tracking-[0.15em] uppercase font-bold text-[#A81458] bg-[#FCE7F1] px-2.5 py-1 rounded-full">
                    Coming Soon
                  </span>
                  <div className="mb-5">{cat.icon}</div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-[#180D14] mb-3">
                    {cat.title}
                  </p>
                  <p className="text-sm text-[#6B5560] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-[90px] px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="bg-[#1B0F16] px-6 md:px-10 py-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] font-bold mb-4">
              Stocking the Shelves
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3.5">
              Coming Soon
            </h2>
            <p className="text-white/65 max-w-md mx-auto leading-relaxed">
              Shawnie is putting the finishing touches on the first batch of Library drops. Check back soon.
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
