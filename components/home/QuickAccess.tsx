"use client";

import FadeIn from "@/components/ui/FadeIn";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Book Appointment",
    description: "Secure your slot in the lab. Slots fill fast.",
    href: "https://shawnieholbrook.booksy.com",
    external: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    label: "Shop Hair Care",
    description: "Shawnie's curated picks and SLL formulas.",
    href: "https://benable.com/i/R4E5C?utm_campaign=v1-0425&utm_content=807109&utm_medium=onboarding-profile-share&utm_source=ig",
    external: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="21" />
      </svg>
    ),
    label: "Podcast",
    description: "LOC'd Down at the Lab — real talk, every week.",
    href: "/podcast",
    external: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    label: "Watch Live",
    description: "Catch Shawnie live on Twitch. Be in the room.",
    href: "https://twitch.tv/shawniesloclab",
    external: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    label: "Loc Lab Library",
    description: "E-books, guides, and digital products for loc lovers.",
    href: "/library",
    external: false,
  },
];

export default function QuickAccess() {
  return (
    <section className="py-24 md:py-28 bg-transparent border-t border-[#F472B6]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-4">
            The Lab
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-14">
            Where do you want to go?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.08}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-5 p-7 border border-gray-100 hover:border-[#F472B6] hover:shadow-sm transition-all duration-300 cursor-pointer h-full"
              >
                <span className="text-[#F472B6] group-hover:scale-110 transition-transform duration-200 inline-block">
                  {card.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-black mb-2">
                    {card.label}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <span className="mt-auto text-xs tracking-widest text-[#F472B6] uppercase">
                  → Enter
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
