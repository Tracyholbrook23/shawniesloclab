"use client";

import { useEffect, useRef } from "react";

const AUTO_SCROLL_MS = 3500;

export default function HeroScrollCue({ targetId }: { targetId: string }) {
  const userScrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      userScrolledRef.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const t = setTimeout(() => {
      if (userScrolledRef.current) return;
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, AUTO_SCROLL_MS);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, [targetId]);

  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @keyframes hero-scroll-cue-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
      <button
        onClick={handleClick}
        aria-label="Scroll to see more"
        className="absolute left-1/2 flex flex-col items-center gap-2 z-20"
        style={{
          bottom: "clamp(16px, 4svh, 40px)",
          transform: "translateX(-50%)",
          animation: "hero-scroll-cue-bounce 2s ease-in-out infinite",
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/85">
          Scroll
        </span>
        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
    </>
  );
}
