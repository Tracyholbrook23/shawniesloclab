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
    <section className="relative bg-[#fdf8fb] overflow-hidden">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden flex flex-col">

        {/* Image — full width, tall portrait crop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full"
          style={{ height: "72vw", minHeight: 280, maxHeight: 480 }}
        >
          {/* Bottom fade into blush */}
          <div
            className="absolute bottom-0 inset-x-0 h-16 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(253,248,251,0) 0%, rgba(253,248,251,1) 100%)",
            }}
          />
          <Image
            src="/images/shawnie/hero-shawnie.jpeg"
            alt="Shawnie — Loc Lab founder"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>

        {/* Text — below image */}
        <div className="px-6 pt-6 pb-14">
          <motion.p {...fadeUp(0.2)} className="text-[10px] tracking-[0.35em] uppercase text-[#F472B6] mb-4">
            Est. Lansing, MI
          </motion.p>
          <motion.h1
            {...fadeUp(0.3)}
            className="text-[clamp(2.6rem,12vw,4rem)] font-bold tracking-tight text-black leading-[0.92] mb-5"
          >
            Shawnie's<br />Loc Lab
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-sm text-gray-400 mb-8 leading-relaxed italic max-w-xs">
            Quote coming soon.
          </motion.p>
          <motion.div {...fadeUp(0.48)} className="flex flex-col gap-3">
            <a
              href="https://shawnieholbrook.booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:bg-[#F472B6] transition-colors duration-300"
            >
              Book Appointment
            </a>
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
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex relative min-h-screen items-stretch">

        {/* Pink glow behind text */}
        <div
          className="absolute left-0 top-0 h-full w-[55%] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(244,114,182,0.10) 0%, rgba(253,248,251,0) 70%)",
          }}
        />

        {/* Left — Text */}
        <div className="relative z-10 flex flex-col justify-center w-[52%] px-16 lg:px-24 py-0">
          <motion.p {...fadeUp(0.1)} className="text-xs tracking-[0.35em] uppercase text-[#F472B6] mb-7">
            Est. Lansing, MI
          </motion.p>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight text-black leading-[0.95] mb-7"
          >
            Shawnie's<br />Loc Lab
          </motion.h1>
          <motion.p {...fadeUp(0.35)} className="text-base text-gray-400 max-w-xs mb-12 leading-relaxed italic">
            Quote coming soon.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="flex flex-row gap-3">
            <a
              href="https://shawnieholbrook.booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:bg-[#F472B6] transition-colors duration-300"
            >
              Book Appointment
            </a>
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

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="absolute right-0 top-0 h-full w-[50%]"
        >
          {/* Left-edge fade */}
          <div
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(253,248,251,1) 0%, rgba(253,248,251,0) 100%)",
            }}
          />
          {/* Pink glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(244,114,182,0.10) 0%, rgba(253,248,251,0) 65%)",
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

      </div>

    </section>
  );
}
