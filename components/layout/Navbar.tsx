import Link from "next/link";

const navLinks = [
  { label: "Book", href: "https://shawnieholbrook.booksy.com", external: true },
  { label: "Shop", href: "/shop", external: false },
  { label: "Podcast", href: "/podcast", external: false },
  { label: "Watch Live", href: "/watch", external: false },
  { label: "Library", href: "/library", external: false },
  { label: "About", href: "/about", external: false },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function TwitchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-widest uppercase whitespace-nowrap text-black hover:opacity-60 transition-opacity duration-200"
        >
          Shawnie's Loc Lab
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-gray-500 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-gray-500 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/shawniesloclab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-black transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://tiktok.com/@shawniesloclab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-gray-400 hover:text-black transition-colors duration-200"
          >
            <TikTokIcon />
          </a>
          <a
            href="https://twitch.tv/shawniesloclab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch"
            className="text-gray-400 hover:text-black transition-colors duration-200"
          >
            <TwitchIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
