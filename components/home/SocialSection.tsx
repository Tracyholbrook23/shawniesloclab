import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { ALL_GALLERY_PHOTOS } from "@/lib/galleryMedia";

// Real client work, styled like an IG grid — pulled from the gallery,
// pinned to a fixed spread so the section stays stable across renders.
const posts = [
  ALL_GALLERY_PHOTOS[1], // stitch braids
  ALL_GALLERY_PHOTOS[4], // barrel twists
  ALL_GALLERY_PHOTOS[14], // regular retwist
  ALL_GALLERY_PHOTOS[17], // two strand twists
  ALL_GALLERY_PHOTOS[7], // barrel twists
  ALL_GALLERY_PHOTOS[20], // two strand twists
].filter(Boolean);

export default function SocialSection() {
  return (
    <section className="py-24 md:py-28 bg-transparent border-t border-[#E0448E]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-3">
                Follow the Lab
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#180D14]">
                @shawniesloclab
              </h2>
            </div>
            <a
              href="https://instagram.com/shawniesloclab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#8A7580] hover:text-[#180D14] transition-colors duration-200 hidden md:block"
            >
              View Instagram →
            </a>
          </div>
        </FadeIn>

        {/* Horizontal scroll grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-6">
          {posts.map((post, i) => (
            <FadeIn key={post.src} delay={i * 0.07}>
              <a
                href="https://instagram.com/shawniesloclab"
                target="_blank"
                rel="noopener noreferrer"
                className="group block shrink-0 w-44 md:w-auto"
              >
                <div className="relative aspect-square overflow-hidden bg-[#FCE7F1]/40 border border-[#E0448E]/20 group-hover:border-[#E0448E] group-hover:scale-105 group-hover:shadow-[0_8px_28px_rgba(224,68,142,0.18)] transition-all duration-300 ease-out">
                  <Image
                    src={post.src}
                    alt={`${post.category} — Shawnie's Loc Lab on Instagram`}
                    fill
                    sizes="(max-width: 768px) 176px, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* IG glyph, top-right */}
                  <div className="absolute top-2 right-2 z-10 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-[#8A7580] mt-2 tracking-wide">{post.category}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <a
          href="https://instagram.com/shawniesloclab"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block md:hidden text-xs tracking-widest uppercase text-[#8A7580] hover:text-[#180D14] transition-colors duration-200"
        >
          View Instagram →
        </a>

      </div>
    </section>
  );
}
