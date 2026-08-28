import { galleryVidPath } from "@/lib/galleryMedia";
import GalleryHeroVideo from "@/components/gallery/GalleryHeroVideo";

export default function HairVideoSection() {
  return (
    <section
      id="hair-video"
      className="relative w-full h-screen min-h-[520px] overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: 68 }}
    >
      <GalleryHeroVideo
        src={galleryVidPath("barrel-twists", "IMG_3040.mov")}
        eager
      />

      {/* Dark + brand tint overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,15,22,0.45) 0%, rgba(27,15,22,0.1) 40%, rgba(27,15,22,0.6) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 15%, rgba(224,68,142,0.3) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-3.5 font-bold">
          The Craft
        </p>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
          This is loc life.
        </h2>
      </div>
    </section>
  );
}
