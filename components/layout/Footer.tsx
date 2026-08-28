"use client";

import Link from "next/link";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

const navLinks = [
  { label: "Book", href: BOOKSY_URL, external: true, highlight: false },
  { label: "Podcast", href: "/podcast", external: false, highlight: false },
  { label: "Watch Live", href: "/watch", external: false, highlight: false },
  { label: "Library", href: "/library", external: false, highlight: false },
  { label: "Support My Journey", href: "/support", external: false, highlight: true },
  { label: "About", href: "/about", external: false, highlight: false },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/shawniesloclab",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0A8CE" strokeWidth="1.6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="#F0A8CE" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@shawniesloclab",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/shawniesloclab",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#B98CFF">
        <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19HGhiwvu9/?mibextid=wwXIfr",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#7CA9F0">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B0F16] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="text-sm font-extrabold tracking-[0.12em] uppercase text-white mb-3">
              Shawnie's Loc Lab
            </p>
            <p className="text-[13px] text-white/55 leading-relaxed max-w-xs">
              Loc care, hair science, and community, from the chair to the podcast to the shop. Based in Lansing, MI, on the campus of Michigan State University.
            </p>
            <div className="flex items-center gap-3.5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-[18px]">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => {
                const linkClassName = `text-[13px] transition-colors duration-200 ${
                  link.highlight
                    ? "text-[#F0A8CE] font-semibold hover:text-white"
                    : "text-white/60 hover:text-[#F0A8CE]"
                }`;
                return (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={link.href === BOOKSY_URL ? openBooksyWidget : undefined}
                        className={linkClassName}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClassName}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact + Location */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-[18px]">Contact</p>

            <p className="text-[13px] text-white/60">
              <a
                href="mailto:business@shawniesloclab.com"
                className="hover:text-[#F0A8CE] transition-colors duration-200"
              >
                business@shawniesloclab.com
              </a>
            </p>
            <p className="text-[11.5px] text-white/35 leading-relaxed mb-3.5">
              Business, collaboration &amp; media inquiries, brand deals
            </p>

            <p className="text-[13px] text-white/60">
              <a
                href="mailto:support@shawniesloclab.com"
                className="hover:text-[#F0A8CE] transition-colors duration-200"
              >
                support@shawniesloclab.com
              </a>
            </p>
            <p className="text-[11.5px] text-white/35 leading-relaxed mb-5">
              Customer support, booking issues &amp; general questions
            </p>

            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-[10px]">Location</p>
            <p className="text-[13px] text-white/60">
              Lansing, MI · near MSU
            </p>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Shawnie's Loc Lab. All rights reserved.
          </p>
          <a
            href="https://instagram.com/Trayfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/35 hover:text-white/60 transition-colors duration-200"
          >
            Built by Tracy
          </a>
        </div>

      </div>
    </footer>
  );
}
