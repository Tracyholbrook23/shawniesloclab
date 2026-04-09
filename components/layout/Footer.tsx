import Link from "next/link";

const navLinks = [
  { label: "Book", href: "https://shawnieholbrook.booksy.com", external: true },
  { label: "Shop", href: "https://benable.com/i/R4E5C?utm_campaign=v1-0425&utm_content=807109&utm_medium=onboarding-profile-share&utm_source=ig", external: true },
  { label: "Podcast", href: "/podcast", external: false },
  { label: "Watch Live", href: "/watch", external: false },
  { label: "Library", href: "/library", external: false },
  { label: "About", href: "/about", external: false },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/shawniesloclab" },
  { label: "TikTok", href: "https://tiktok.com/@shawniesloclab" },
  { label: "Facebook", href: "https://facebook.com/shawniesloclab" },
  { label: "Twitch", href: "https://twitch.tv/shawniesloclab" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-white mb-3">
              Shawnie's Loc Lab
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              A full brand experience built around loc culture, hair science, and community. Based in Lansing, MI — Michigan State University.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-[#F472B6] transition-colors duration-200 tracking-wide"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-[#F472B6] transition-colors duration-200 tracking-wide"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-5">Follow</p>
            <ul className="space-y-3 mb-8">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-[#F472B6] transition-colors duration-200 tracking-wide"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">Contact</p>
            <span className="text-xs text-gray-400">
              contact@shawniesloclab.com
            </span>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Shawnie's Loc Lab. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            Built in the Lab.
          </p>
        </div>

      </div>
    </footer>
  );
}
