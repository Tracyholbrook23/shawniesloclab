"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section className="relative bg-[#fdf8fb] overflow-hidden" style={{ isolation: "isolate" }}>

      {/* Spline particle background — clipped to hero only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://my.spline.design/particleswithcolorshiftbackground-Grj0Qw7ODgs8UPHiOd9UrljB/"
          frameBorder="0"
          title="Particle background"
          loading="lazy"
          style={{
            display: "block",
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden flex flex-col relative z-10">

        {/* Text */}
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
      <div className="hidden md:flex relative z-10 min-h-screen items-stretch">

        {/* Text — full width, centered */}
        <div className="relative z-10 flex flex-col justify-center w-full px-16 lg:px-32 py-0">
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


      </div>

    </section>
  );
}
