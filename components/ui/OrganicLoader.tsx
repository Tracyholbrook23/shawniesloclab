"use client";

import { useEffect, useRef } from "react";

interface BlobConfig {
  id: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  blur: number;
  gradient: string;
  animName: string;
  duration: string;
  /** Parallax strength in px per unit of cursor offset from viewport center; sign flips direction. */
  strength: number;
}

const BLOBS: BlobConfig[] = [
  {
    id: "a",
    top: "4%",
    left: "-4%",
    size: 420,
    blur: 26,
    gradient:
      "radial-gradient(circle at 35% 35%, rgba(255,170,215,0.95) 0%, rgba(240,70,155,0.85) 30%, rgba(200,20,110,0.55) 62%, rgba(200,20,110,0) 78%)",
    animName: "organic-blob-a",
    duration: "11s",
    strength: 60,
  },
  {
    id: "b",
    bottom: "-4%",
    right: "-4%",
    size: 380,
    blur: 30,
    gradient:
      "radial-gradient(circle at 60% 40%, rgba(255,190,225,0.9) 0%, rgba(224,68,142,0.8) 32%, rgba(168,20,88,0.5) 62%, rgba(168,20,88,0) 78%)",
    animName: "organic-blob-b",
    duration: "14s",
    strength: -50,
  },
  {
    id: "c",
    top: "32%",
    right: "8%",
    size: 300,
    blur: 24,
    gradient:
      "radial-gradient(circle at 50% 50%, rgba(255,150,200,0.9) 0%, rgba(210,30,120,0.75) 35%, rgba(168,20,88,0.4) 65%, rgba(168,20,88,0) 80%)",
    animName: "organic-blob-c",
    duration: "16s",
    strength: 75,
  },
];

/**
 * Ambient decorative background — bold pink blobs that drift/morph on a
 * loop AND parallax toward the cursor on desktop. Split into two layers
 * per blob (outer wrapper handles the JS-driven cursor transform, inner
 * div handles the CSS keyframe drift) since animating `transform` via
 * @keyframes on an element fully replaces any inline transform on that
 * same element.
 */
export default function OrganicLoader() {
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isDesktopPointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktopPointer) return;

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      wrapRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = BLOBS[i].strength;
        el.style.transform = `translate(${nx * s}px, ${ny * s}px)`;
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes organic-blob-a {
          0%, 100% { transform: translate(-22%, -26%) scale(1); border-radius: 42% 58% 65% 35% / 45% 40% 60% 55%; }
          33% { transform: translate(26%, 18%) scale(1.3); border-radius: 60% 40% 35% 65% / 55% 60% 40% 45%; }
          66% { transform: translate(-16%, 30%) scale(0.8); border-radius: 35% 65% 55% 45% / 40% 55% 45% 60%; }
        }
        @keyframes organic-blob-b {
          0%, 100% { transform: translate(20%, 24%) scale(1); border-radius: 55% 45% 40% 60% / 50% 55% 45% 50%; }
          40% { transform: translate(-28%, -20%) scale(1.35); border-radius: 40% 60% 55% 45% / 60% 40% 60% 40%; }
          70% { transform: translate(16%, -28%) scale(0.75); border-radius: 65% 35% 45% 55% / 45% 60% 40% 55%; }
        }
        @keyframes organic-blob-c {
          0%, 100% { transform: translate(0%, 0%) scale(1); border-radius: 50% 50% 45% 55% / 55% 45% 55% 45%; }
          50% { transform: translate(-26%, 28%) scale(1.4); border-radius: 45% 55% 60% 40% / 40% 60% 40% 60%; }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {BLOBS.map((b, i) => (
          <div
            key={b.id}
            ref={(el) => {
              wrapRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              top: b.top,
              bottom: b.bottom,
              left: b.left,
              right: b.right,
              width: b.size,
              height: b.size,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: b.gradient,
                filter: `blur(${b.blur}px)`,
                animation: `${b.animName} ${b.duration} ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
