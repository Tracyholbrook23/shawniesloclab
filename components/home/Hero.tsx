"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden bg-[#fdf8fb]">

      {/* Soft pink glow — left side behind text */}
      <div
        className="absolute left-0 top-0 h-full w-[55%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(244,114,182,0.10) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Left — Text */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-[52%] px-8 md:px-16 lg:px-24 py-28 md:py-0">

        <motion.p
          {...fadeUp(0.1)}
          className="text-xs tracking-[0.35em] uppercase text-[#F472B6] mb-7"
        >
          Est. Lansing, MI
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight text-black leading-[0.95] mb-7"
        >
          Shawnie's<br />Loc Lab
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base text-gray-400 max-w-xs mb-12 leading-relaxed italic"
        >
          Quote coming soon.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row gap-3">
          {/* Primary */}
          <a
            href="https://shawnieholbrook.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:bg-[#F472B6] transition-colors duration-300"
          >
            Book Appointment
          </a>
          {/* Outline */}
          <a
            href="https://benable.com/i/R4E5C?utm_campaign=v1-0425&utm_content=807109&utm_medium=onboarding-profile-share&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black text-black text-sm font-medium tracking-wide hover:border-[#F472B6] hover:text-[#F472B6] transition-colors duration-300"
          >
            Shop Hair Care
          </a>
        </motion.div>
      </div>

      {/* Right — Image, pulled left to overlap text zone slightly */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="absolute right-0 top-0 h-full w-[52%] md:w-[50%] hidden md:block"
      >
        {/* Fade blend on left edge so image melts into text area */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(253,248,251,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Soft pink glow behind subject */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(244,114,182,0.10) 0%, rgba(255,255,255,0) 65%)",
          }}
        />

        <Image
          src="/images/shawnie/hero-shawnie.jpeg"
          alt="Shawnie — Loc Lab founder"
          fill
          priority
          className="object-cover object-top"
          sizes="50vw"
        />
      </motion.div>

      {/* Mobile image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:hidden relative w-full min-h-[55vw] mt-auto"
      >
        <Image
          src="/images/shawnie/hero-shawnie.jpeg"
          alt="Shawnie — Loc Lab founder"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

    </section>
  );
}
