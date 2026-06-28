"use client";

import { useEffect, useRef } from "react";

/* ── Organic blob loader ─────────────────────────────────── */
function OrganicLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 200;
    const H = 200;
    canvas.width  = W;
    canvas.height = H;

    let t = 0;
    let raf = 0;

    const drawBlob = (
      cx: number,
      cy: number,
      baseR: number,
      points: number,
      noise: number,
      time: number,
      hue: number,
      alpha: number,
    ) => {
      const pts: [number, number][] = [];

      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const r =
          baseR +
          Math.sin(time * 1.3 + i * 0.9)  * noise * 0.55 +
          Math.sin(time * 2.1 + i * 1.7)  * noise * 0.30 +
          Math.cos(time * 0.8 + i * 2.3)  * noise * 0.15;
        pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
      }

      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const p0 = pts[(i - 1 + pts.length) % pts.length];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % pts.length];
        const p3 = pts[(i + 2) % pts.length];

        if (i === 0) ctx.moveTo(p1[0], p1[1]);

        const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
      }
      ctx.closePath();

      const g = ctx.createRadialGradient(cx - baseR * 0.25, cy - baseR * 0.25, 0, cx, cy, baseR + noise);
      g.addColorStop(0,    `hsla(${hue}, 90%, 78%, ${alpha})`);
      g.addColorStop(0.45, `hsla(${hue + 8}, 85%, 62%, ${alpha * 0.85})`);
      g.addColorStop(0.80, `hsla(${hue - 5}, 80%, 52%, ${alpha * 0.55})`);
      g.addColorStop(1,    `hsla(${hue},     75%, 45%, 0)`);

      ctx.fillStyle = g;
      ctx.fill();

      const sg = ctx.createRadialGradient(
        cx - baseR * 0.32, cy - baseR * 0.38, 0,
        cx - baseR * 0.20, cy - baseR * 0.20, baseR * 0.38,
      );
      sg.addColorStop(0,   `rgba(255, 240, 250, ${alpha * 0.80})`);
      sg.addColorStop(0.5, `rgba(255, 220, 240, ${alpha * 0.25})`);
      sg.addColorStop(1,   "rgba(255,255,255, 0)");
      ctx.fillStyle = sg;
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      drawBlob(W / 2 + 8, H / 2 + 6, 54, 12, 18, t * 0.7 + 2, 330, 0.45);
      drawBlob(W / 2, H / 2, 62, 14, 22, t, 320, 0.88);
      t += 0.022;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 200, height: 200, display: "block" }}
      aria-hidden="true"
    />
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function WatchPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

      {/* Organic loader */}
      <div className="mb-2">
        <OrganicLoader />
      </div>

      {/* Label */}
      <p className="text-[10px] tracking-[0.35em] uppercase text-[#F472B6] mb-5 font-medium">
        Watch Live
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
        The stream is<br />almost ready.
      </h1>

      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        Live sessions, styling breakdowns, and behind-the-scenes at the lab — dropping soon. Follow on Twitch to get notified.
      </p>

      <a
        href="https://twitch.tv/shawniesloclab"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F472B6]/10 hover:bg-[#F472B6]/20 text-[#db2777] text-xs tracking-widest uppercase font-semibold transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
        </svg>
        Follow on Twitch
      </a>

    </main>
  );
}
