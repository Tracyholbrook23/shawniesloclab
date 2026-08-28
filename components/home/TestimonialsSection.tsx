"use client";

import FadeIn from "@/components/ui/FadeIn";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

// Real client reviews, pulled from Shawnie's public Booksy profile
// (shawnieholbrook.booksy.com — 5.0 stars, 61 reviews as of Jul 2026).
const testimonials = [
  {
    quote:
      "Experience was amazing! Fast, professional, & high quality work. I'll definitely be back!",
    name: "Dartanion",
    service: "Regular Retwist & Style",
    initials: "DA",
  },
  {
    quote:
      "Shawnie did an amazing job on my locs! I'm so happy with how they turned out. Definitely recommend!",
    name: "Illyana",
    service: "Regular Retwist & Style",
    initials: "IL",
  },
  {
    quote:
      "Very professional and friendly, will recommend to others.",
    name: "Chance",
    service: "Crochet Retwist",
    initials: "CH",
  },
];

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#E0448E">
      <path d="M12 2l2.9 6.9L22 9.6l-5.3 4.7L18.2 22 12 18.2 5.8 22l1.5-7.7L2 9.6l7.1-0.7z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#1B0F16] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-2.5 font-bold">
            Client Love
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-lg mb-4">
            What the chair says back.
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openBooksyWidget}
            className="inline-flex items-center gap-2 mb-11 group"
          >
            <span className="flex gap-[2px]">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} />
              ))}
            </span>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
              5.0 · 61 reviews on Booksy
            </span>
          </a>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="bg-white/[0.04] border border-white/10 p-7 flex flex-col gap-4.5 h-full">
                <div className="flex gap-[3px]">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/85 italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-[34px] h-[34px] rounded-full bg-[#E0448E] flex items-center justify-center text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold m-0">{t.name}</p>
                    <p className="text-[11px] text-white/45 mt-0.5 m-0">{t.service}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
