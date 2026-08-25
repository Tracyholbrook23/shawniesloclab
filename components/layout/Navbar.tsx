"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

const navLinks = [
  { key: "home", label: "Home", href: "/", external: false },
  { key: "book", label: "Book", href: BOOKSY_URL, external: true },
  { key: "podcast", label: "Podcast", href: "/podcast", external: false },
  { key: "watch", label: "Watch Live", href: "/watch", external: false },
  { key: "gallery", label: "Gallery", href: "/gallery", external: false },
  { key: "library", label: "Library", href: "/library", external: false },
  { key: "support", label: "Support", href: "/support", external: false },
  { key: "about", label: "About", href: "/about", external: false },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/shawniesloclab", icon: <InstagramIcon /> },
  { label: "TikTok", href: "https://tiktok.com/@shawniesloclab", icon: <TikTokIcon /> },
  { label: "Twitch", href: "https://twitch.tv/shawniesloclab", icon: <TwitchIcon /> },
];

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E0448E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="#E0448E" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#180D14">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function TwitchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="#9146FF">
      <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (key: string, href: string) =>
    key === "home" ? pathname === "/" : !href.startsWith("http") && !!pathname?.startsWith(href);

  return (
    <>
      <style>{`
        @media (max-width: 1180px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-[#FBF3F8] border-b border-[#E0448E]/[0.16]">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-extrabold tracking-[0.12em] uppercase whitespace-nowrap text-[#180D14] hover:opacity-70 transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Shawnie's Loc Lab
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-desktop flex items-center gap-[18px]">
            {navLinks.map((link) => {
              const active = isActive(link.key, link.href);
              return (
                <li key={link.key} className="whitespace-nowrap">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={link.href === BOOKSY_URL ? openBooksyWidget : undefined}
                      className={`text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[#180D14] ${
                        active ? "text-[#180D14] font-bold" : "text-[#8A7580] font-medium"
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[#180D14] ${
                        active ? "text-[#180D14] font-bold" : "text-[#8A7580] font-medium"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Socials + Book Now */}
          <div className="nav-desktop flex items-center gap-3.5 flex-shrink-0">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="opacity-85 hover:opacity-100 transition-opacity duration-200"
              >
                {s.icon}
              </a>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openBooksyWidget}
              className="inline-flex items-center px-5 py-[9px] bg-[#E0448E] text-white rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[#A81458] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="nav-mobile-btn flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0"
            style={{ display: "none" }}
          >
            <span
              className={`block w-5 h-px bg-[#180D14] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#180D14] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#180D14] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>

        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-[68px] left-0 right-0 bg-[#FBF3F8] border-b border-[#E0448E]/[0.16] px-6 pb-8 pt-5 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <ul className="mb-6">
            {navLinks.map((link) => (
              <li key={link.key} className="border-b border-black/[0.06]">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (link.href === BOOKSY_URL) openBooksyWidget(e);
                      setMenuOpen(false);
                    }}
                    className="block py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-[#4A3A41] hover:text-[#180D14] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-[#4A3A41] hover:text-[#180D14] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              openBooksyWidget(e);
              setMenuOpen(false);
            }}
            className="inline-flex items-center px-6 py-3 bg-[#E0448E] text-white rounded-full text-xs font-bold tracking-[0.1em] uppercase mb-6"
          >
            Book Now
          </a>

          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A7580] mb-4">Follow</p>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
