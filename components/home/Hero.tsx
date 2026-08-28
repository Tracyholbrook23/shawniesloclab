"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HeroScrollCue from "@/components/home/HeroScrollCue";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Natural Methods" },
];

// Photos of Shawnie that crossfade/pan through one another — the first
// thing visitors see is this transition.
const SLIDES = [
  { src: "/images/shawnie/hero-shawnie.jpeg", position: "center 20%" },
  { src: "/images/shawnie/about-hero.jpeg", position: "center 8%" },
  { src: "/images/shawnie/why-shawnie.jpeg", position: "center 12%" },
  { src: "/images/shawnie/about-shawnie.jpeg", position: "center 10%" },
  { src: "/images/shawnie/Facetune_08-04-2026-20-44-34.jpeg", position: "center 10%" },
  { src: "/images/shawnie/podcast-shawnie.jpeg", position: "center 6%" },
];

const SLIDE_DURATION_MS = 2500;
const FADE_MS = 700;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full flex items-end overflow-hidden"
      style={{ minHeight: "max(640px, 92vh)" }}
    >
      {SLIDES.map((slide, i) => {
        const isActive = active === i;
        return (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              filter: isActive ? "brightness(1)" : "brightness(1.35)",
              transition: `opacity ${FADE_MS}ms ease-in-out, filter ${FADE_MS}ms ease-in-out`,
            }}
          >
            <Image
              src={slide.src}
              alt="Shawnie, founder of Shawnie's Loc Lab"
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              quality={90}
              className="object-cover"
              style={{
                objectPosition: slide.position,
                transform: isActive ? "scale(1.06) translateX(-1.5%)" : "scale(1) translateX(0)",
                transition: `transform ${SLIDE_DURATION_MS + FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
              sizes="100vw"
            />
          </div>
        );
      })}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,15,22,0.55) 0%, rgba(27,15,22,0.15) 35%, rgba(27,15,22,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, rgba(224,68,142,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-14 flex flex-col gap-7">
        <p className="text-xs tracking-[0.3em] uppercase text-[#F5B8D8] font-bold">
          Lansing, MI · Loc &amp; Braid Specialist &amp; Educator
        </p>
        <h1 className="text-[44px] md:text-[68px] leading-[1.02] font-extrabold tracking-tight text-white max-w-3xl">
          Precision locs.
          <br />
          Real science. Real culture.
        </h1>
        <p className="text-base md:text-[17px] leading-relaxed text-white/80 max-w-md">
          Loc and braid specialist: installs, maintenance, and repair from the lab in Lansing, plus the podcast, the stream, and the products built around loc life.
        </p>
        <div className="flex flex-wrap gap-3.5 mt-2">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openBooksyWidget}
            className="inline-flex items-center px-[30px] py-[15px] bg-[#E0448E] text-white rounded-full text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-[#A81458] transition-colors duration-200"
            style={{ boxShadow: "0 8px 28px rgba(224,68,142,0.4)" }}
          >
            Book Appointment
          </a>
          <a
            href="/gallery"
            className="inline-flex items-center px-[30px] py-[15px] rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-white border border-white/35 hover:bg-white/10 transition-colors duration-200"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}
          >
            View Gallery
          </a>
        </div>

        <div className="flex gap-10 mt-5 flex-wrap">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[28px] font-extrabold text-white m-0">{s.value}</p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <HeroScrollCue targetId="hair-video" />
    </section>
  );
}
