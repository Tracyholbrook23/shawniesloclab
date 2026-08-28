"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import GalleryHeroVideo from "@/components/gallery/GalleryHeroVideo";
import { galleryImgPath, galleryVidPath } from "@/lib/galleryMedia";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Book Appointment",
    description: "Secure your slot in the lab. Slots fill fast.",
    href: BOOKSY_URL,
    external: true,
    media: { type: "image" as const, src: galleryImgPath("barrel-twists", "IMG_3986.jpeg"), focus: "object-center" },
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="21" />
      </svg>
    ),
    label: "Podcast",
    description: "LOC'd Down at the Lab: real talk, every week.",
    href: "/podcast",
    external: false,
    media: { type: "image" as const, src: "/images/shawnie/podcast-shawnie.jpeg", focus: "object-top" },
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    label: "Watch Live",
    description: "Catch Shawnie live on Twitch. Be in the room.",
    href: "/watch",
    external: false,
    media: { type: "video" as const, src: galleryVidPath("barrel-twists", "IMG_3774.mov") },
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    label: "Loc Lab Library",
    description: "E-books, guides, and digital products for loc lovers.",
    href: "/library",
    external: false,
    media: { type: "image" as const, src: "/images/shawnie/product-formula-1.jpeg", focus: "object-top" },
  },
];

export default function QuickAccess() {
  return (
    <section className="py-[88px] bg-transparent border-b border-[#E0448E]/[0.14]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-2.5">
            The Lab
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#180D14] mb-10">
            Where do you want to go?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#E0448E]/[0.14]">
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.08}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                onClick={card.href === BOOKSY_URL ? openBooksyWidget : undefined}
                className="group relative flex flex-col justify-between overflow-hidden min-h-[300px] p-7 cursor-pointer"
              >
                {/* Photo/video background */}
                <div className="absolute inset-0 z-0 bg-[#1B0F16]">
                  {card.media.type === "image" ? (
                    <Image
                      src={card.media.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-cover ${card.media.focus} transition-transform duration-500 ease-out group-hover:scale-110`}
                    />
                  ) : (
                    <GalleryHeroVideo
                      src={card.media.src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  )}
                  {/* Dark gradient for legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(27,15,22,0.35) 0%, rgba(27,15,22,0.55) 55%, rgba(27,15,22,0.88) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 100%, rgba(224,68,142,0.35) 0%, transparent 65%)",
                    }}
                  />
                </div>

                {/* Content */}
                <span className="relative z-10 text-[#F0A8CE] group-hover:text-white group-hover:scale-110 transition-all duration-200 inline-block w-fit">
                  {card.icon}
                </span>
                <div className="relative z-10">
                  <p className="text-sm font-bold tracking-wide text-white mb-2">
                    {card.label}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="text-[11px] tracking-[0.15em] text-[#F0A8CE] group-hover:text-white font-bold uppercase transition-colors duration-200">
                    Enter →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
