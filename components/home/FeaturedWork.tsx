"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import GalleryHeroVideo from "@/components/gallery/GalleryHeroVideo";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";
import { FEATURED_WORK } from "@/lib/galleryMedia";

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-28 bg-transparent border-t border-[#E0448E]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <FadeIn>
          <div className="flex items-end justify-between mb-10 md:mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-3">
                Fresh Out the Lab
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#180D14] max-w-md">
                Real installs. Real clients.
              </h2>
            </div>
            <a
              href="/gallery"
              className="text-xs tracking-widest uppercase text-[#8A7580] hover:text-[#180D14] transition-colors duration-200 hidden md:block whitespace-nowrap"
            >
              View Full Gallery →
            </a>
          </div>
        </FadeIn>

        {/* Horizontal scroll strip on mobile, wrapping grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-5">
          {FEATURED_WORK.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.06}>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book your ${item.category} look`}
                onClick={(e) => openBooksyWidget(e)}
                className="group relative block shrink-0 w-64 md:w-auto aspect-[4/5] overflow-hidden bg-[#1B0F16] cursor-pointer"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`${item.category} — Shawnie's Loc Lab`}
                    fill
                    sizes="(max-width: 768px) 256px, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <GalleryHeroVideo
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Bottom gradient + category label */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-3 text-white text-xs tracking-widest uppercase font-medium z-10">
                  {item.category}
                </p>

                {/* Book This Look — appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="px-4 py-2 rounded-full bg-white text-[#180D14] text-xs font-semibold tracking-widest uppercase">
                    Book This Look
                  </span>
                </div>

                {/* Video indicator */}
                {item.type === "video" && (
                  <div className="absolute top-3 right-3 z-10 opacity-90">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </div>
                )}
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col md:hidden">
            <a
              href="/gallery"
              className="text-xs tracking-widest uppercase text-[#8A7580] hover:text-[#180D14] transition-colors duration-200 mb-6"
            >
              View Full Gallery →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-4 md:mt-10">
            <Button variant="outline" href="https://shawnieholbrook.booksy.com" target="_blank">
              Book Your Look
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
