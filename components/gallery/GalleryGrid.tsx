"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import GalleryHeroVideo from "@/components/gallery/GalleryHeroVideo";
import Button from "@/components/ui/Button";
import { BOOKSY_URL } from "@/lib/booksyWidget";
import {
  GALLERY_CATEGORIES as CATEGORIES,
  galleryImgPath as imgPath,
  galleryVidPath as vidPath,
} from "@/lib/galleryMedia";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible =
    active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.slug === active);

  return (
    <>
      {/* Filter pills */}
      <FadeIn>
        <div className="flex flex-wrap gap-3 mb-14">
          <button
            onClick={() => setActive("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
              active === "all"
                ? "bg-[#E0448E] text-white"
                : "border border-[#E0448E]/30 bg-[#FCE7F1] text-[#A81458] hover:bg-[#E0448E] hover:text-white"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                active === cat.slug
                  ? "bg-[#E0448E] text-white"
                  : "border border-[#E0448E]/30 bg-[#FCE7F1] text-[#A81458] hover:bg-[#E0448E] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {visible.map((cat, ci) => (
        <div key={cat.slug} className="mb-20">
          {active === "all" && (
            <FadeIn delay={ci * 0.05}>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#180D14] mb-8">
                {cat.label}
              </h2>
            </FadeIn>
          )}

          {/* Photo grid */}
          {cat.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {cat.images.map((file, i) => {
                const src = imgPath(cat.slug, file);
                return (
                  <FadeIn key={file} delay={i * 0.03}>
                    <button
                      onClick={() => setLightbox(src)}
                      className="relative block w-full aspect-square overflow-hidden bg-[#FCE7F1] group"
                    >
                      <Image
                        src={src}
                        alt={`${cat.label}, Shawnie's Loc Lab`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  </FadeIn>
                );
              })}
            </div>
          )}

          {/* Video grid */}
          {cat.videos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.videos.map((file, i) => (
                <FadeIn key={file} delay={i * 0.03}>
                  <div className="relative w-full aspect-square overflow-hidden bg-[#1B0F16]">
                    <GalleryHeroVideo src={vidPath(cat.slug, file)} />
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white text-3xl leading-none opacity-80 hover:opacity-100"
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-3xl flex flex-col items-center gap-5 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={lightbox}
                alt="Shawnie's Loc Lab gallery"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <Button variant="pink" href={BOOKSY_URL} target="_blank">
              Book This Look
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
