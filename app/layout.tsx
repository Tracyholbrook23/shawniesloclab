import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PinkSlimeBackground } from "@/components/ui/PinkSlimeBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shawnie's Loc Lab",
  description: "Where precision meets style. Welcome to the lab.",
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
      </body>
    </html>
  );
}
