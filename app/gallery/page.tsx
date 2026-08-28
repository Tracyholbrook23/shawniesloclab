import FadeIn from "@/components/ui/FadeIn";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHeroVideo from "@/components/gallery/GalleryHeroVideo";
import { galleryImgPath, galleryVidPath } from "@/lib/galleryMedia";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery · Shawnie's Loc Lab",
  description:
    "Real client work from Shawnie's Loc Lab: stitch braids, barrel twists, regular retwists, and 2 strand twists.",
};

export default function GalleryPage() {
  return (
    <main className="bg-transparent text-[#180D14]">
      {/* Hero — full-bleed video background */}
      <section className="relative w-full h-[60vh] md:h-[75vh] min-h-[420px] overflow-hidden flex items-center">
        <GalleryHeroVideo
          src={galleryVidPath("barrel-twists", "IMG_5405.mov")}
          poster={galleryImgPath("barrel-twists", "IMG_5525.jpeg")}
          eager
        />

        {/* Dark + brand tint overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(27,15,22,0.55) 0%, rgba(27,15,22,0.25) 45%, rgba(27,15,22,0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 85%, rgba(224,68,142,0.35) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-3.5 font-bold">
              The Work
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-3.5 text-white">
              Gallery
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/85 max-w-lg leading-relaxed text-lg">
              Real installs, real clients, real results, straight from the lab.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32 px-6 md:px-10 max-w-7xl mx-auto">
        <GalleryGrid />
      </section>
    </main>
  );
}
