import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loc Lab Library — Shawnie's Loc Lab",
  description:
    "E-books, guides, and digital products for loc lovers. Built by Shawnie. Backed by science.",
};

const categories = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "E-Books",
    description: "In-depth guides on loc installation, maintenance, and scalp health — written by Shawnie.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M9 3v7l-4.5 9A2 2 0 0 0 6.5 22h11a2 2 0 0 0 2-1l-4.5-9V3" />
        <line x1="6" y1="14" x2="18" y2="14" />
      </svg>
    ),
    title: "Formulas & Guides",
    description: "Step-by-step care guides, product routines, and lab-tested formulas for every loc type.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <main className="bg-transparent text-black">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
            Digital Products
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            Loc Lab<br />Library
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gray-500 max-w-lg leading-relaxed text-lg">
            E-books, guides, and digital tools built by Shawnie for loc wearers and locticians who want real knowledge — not generic advice.
          </p>
        </FadeIn>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 p-8 hover:border-[#F472B6] transition-colors duration-300">
                  <div className="mb-5">{cat.icon}</div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-black mb-3">
                    {cat.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="border border-[#F472B6]/30 bg-[#FCE7F3]/10 p-14 md:p-20 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 border border-[#F472B6]/40 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-4">
              Stocking the shelves
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-5">
              Coming Soon
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
              Shawnie is putting the finishing touches on the first batch of Library drops. Follow on social to be first in the door.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="pink" href="https://instagram.com/shawniesloclab" target="_blank">
                Follow for Updates
              </Button>
              <Button variant="outline" href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
