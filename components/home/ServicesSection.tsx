"use client";

import FadeIn from "@/components/ui/FadeIn";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

// NOTE: Placeholder service names/descriptions from the design handoff —
// confirm the real service list and copy with Shawnie before shipping.
const services = [
  {
    tag: "Installation",
    title: "Loc Starts & New Growth",
    desc: "Fresh installs and starter locs, sized and sectioned to fit your hair type and goals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-3 6-6.5 6-10a6 6 0 0 0-12 0c0 3.5 2 7 6 10z" />
        <path d="M12 12v6" />
      </svg>
    ),
  },
  {
    tag: "Maintenance",
    title: "Retwist & Repair",
    desc: "Regular retwists, thinning repair, and root maintenance to keep locs strong and neat.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
  },
  {
    tag: "Styling",
    title: "Braids & Styled Looks",
    desc: "Barrel twists, stitch styles, and braid styles for special looks or a full refresh.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2c-4.4 0-8 3.1-8 7 0 2.5 2 4 4 4h1.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 0 2 2c4.4 0 8-3.6 8-8s-3.6-8-9-8z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#FCE7F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-11">
          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#A81458] mb-2.5 font-bold">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-lg">
                Precision service, built around your hair.
              </h2>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openBooksyWidget}
                className="group relative block bg-white p-8 border border-[#E0448E]/[0.15] h-full overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(224,68,142,0.18)] hover:border-[#E0448E]/40"
              >
                {/* Top accent bar */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#E0448E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* Big background index number */}
                <span
                  className="absolute -top-3 -right-2 text-[96px] font-extrabold leading-none select-none pointer-events-none text-[#E0448E]/[0.07] group-hover:text-[#E0448E]/[0.12] transition-colors duration-300"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-full bg-[#E0448E]/10 text-[#E0448E] flex items-center justify-center mb-6 group-hover:bg-[#E0448E] group-hover:text-white transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#E0448E] font-bold mb-4">
                    {svc.tag}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                  <p className="text-[13px] text-[#7A6670] leading-relaxed mb-5">
                    {svc.desc}
                  </p>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#A81458] group-hover:text-[#180D14] transition-colors duration-200">
                    Book This →
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
