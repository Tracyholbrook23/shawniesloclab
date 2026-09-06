import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PinkSlimeBackground } from "@/components/ui/PinkSlimeBackground";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.shawniesloclab.com";
const SITE_TITLE = "Shawnie's Loc Lab";
const SITE_DESCRIPTION = "Where precision meets style. Welcome to the lab.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// LocalBusiness, locality-only address: Shawnie sees clients in Lansing, MI
// but the chair isn't a public storefront address, so this names the city
// without publishing a street address.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_TITLE,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lansing",
    addressRegion: "MI",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBF3F8] text-[#180D14]">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {/* Pink slime interactive background — fixed, behind everything */}
        <PinkSlimeBackground />
        {/* Soft pink border frame — fixed, sits above everything */}
        <div className="fixed inset-0 z-50 pointer-events-none border border-[#E0448E]/30" />
        <div className="relative z-10 flex flex-col min-h-full">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* Booksy embedded booking widget — loaded once, site-wide. Renders
            its own (visually hidden, see globals.css) default button; our
            "Book" buttons/links trigger it via lib/booksyWidget.ts. */}
        <Script
          src="https://booksy.com/widget/code.js?id=1204441&country=us&lang=en"
          strategy="afterInteractive"
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
