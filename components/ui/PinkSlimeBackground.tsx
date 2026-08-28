"use client";

import { useEffect, useRef } from "react";

interface Droplet {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  life: number;    // 0–1, counts down
  maxLife: number; // seconds to live
  hue: number;
}

export function PinkSlimeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Desktop-only effect: skip entirely on touch/mobile devices (no real
    // mouse), so there's no stray pink bubble triggered by touch/scroll.
    const isDesktopPointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktopPointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const S = {
      mouse: { x: -9999, y: -9999 },
      droplets: [] as Droplet[],
      W: 0, H: 0,
      speed: 0,
    };
    let raf = 0;

    const resize = () => {
      S.W = window.innerWidth;
      S.H = window.innerHeight;
      canvas.width  = S.W;
      canvas.height = S.H;
    };

    const spawnDroplets = (x: number, y: number, count: number, speedMult: number) => {
      for (let i = 0; i < count; i++) {
        const angle  = Math.random() * Math.PI * 2;
        const speed  = (1.5 + Math.random() * 8) * speedMult;
        S.droplets.push({
          x: x + (Math.random() - 0.5) * 16,
          y: y + (Math.random() - 0.5) * 16,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 3,
          r: 3 + Math.random() * 9,
          life: 1,
          maxLife: 0.5 + Math.random() * 1.1,
          hue: 315 + Math.random() * 35,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - S.mouse.x;
      const dy = e.clientY - S.mouse.y;
      S.speed = Math.sqrt(dx * dx + dy * dy);
      S.mouse = { x: e.clientX, y: e.clientY };

      const count = Math.min(Math.floor(S.speed * 0.25), 5);
      if (count > 0) spawnDroplets(e.clientX, e.clientY, count, 0.5);
    };

    const onClick = (e: MouseEvent) => {
      spawnDroplets(e.clientX, e.clientY, 22, 1.4);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click",     onClick);
    window.addEventListener("resize",    resize);
    resize();

    const draw = () => {
      const { W, H, mouse, droplets } = S;

      ctx.clearRect(0, 0, W, H);

      // ── cursor liquid pool ─────────────────────────────────────────────
      if (mouse.x > -100) {
        ctx.globalCompositeOperation = "source-over";

        // wide ambient blush
        const ag = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
        ag.addColorStop(0,   "rgba(236, 72, 153, 0.14)");
        ag.addColorStop(0.5, "rgba(236, 72, 153, 0.05)");
        ag.addColorStop(1,   "rgba(236, 72, 153, 0)");
        ctx.fillStyle = ag;
        ctx.fillRect(0, 0, W, H);

        // vibrant liquid core with offset highlight
        const cx = mouse.x - 8;
        const cy = mouse.y - 8;
        const cg = ctx.createRadialGradient(cx, cy, 0, mouse.x, mouse.y, 28);
        cg.addColorStop(0,    "rgba(255, 150, 200, 0.70)");
        cg.addColorStop(0.25, "rgba(240,  60, 150, 0.55)");
        cg.addColorStop(0.60, "rgba(210,  30, 120, 0.28)");
        cg.addColorStop(1,    "rgba(200,  20, 110, 0)");
        ctx.fillStyle = cg;
        ctx.fillRect(0, 0, W, H);

        // glossy specular dot
        const sg = ctx.createRadialGradient(mouse.x - 6, mouse.y - 9, 0, mouse.x - 6, mouse.y - 9, 8);
        sg.addColorStop(0,   "rgba(255, 240, 248, 0.92)");
        sg.addColorStop(0.6, "rgba(255, 200, 230, 0.35)");
        sg.addColorStop(1,   "rgba(255, 180, 220, 0)");
        ctx.fillStyle = sg;
        ctx.fillRect(0, 0, W, H);
      }

      // ── droplets ───────────────────────────────────────────────────────
      S.droplets = droplets.filter(d => d.life > 0);
      droplets.forEach(d => {
        d.vy  += 0.38;
        d.vx  *= 0.96;
        d.vy  *= 0.96;
        d.x   += d.vx;
        d.y   += d.vy;
        d.life -= 0.016 / d.maxLife;

        const a    = Math.max(0, d.life);
        const spd  = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        const ang  = Math.atan2(d.vy, d.vx);

        // stretch in travel direction
        const rx = d.r * (1 + Math.min(spd * 0.10, 0.7));
        const ry = d.r * Math.max(0.55, 1 - spd * 0.06);

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(ang);

        const dg = ctx.createRadialGradient(-rx * 0.3, -ry * 0.3, 0, 0, 0, rx);
        dg.addColorStop(0,    `hsla(${d.hue}, 95%, 82%, ${a})`);
        dg.addColorStop(0.35, `hsla(${d.hue}, 90%, 62%, ${a * 0.90})`);
        dg.addColorStop(0.70, `hsla(${d.hue}, 85%, 48%, ${a * 0.65})`);
        dg.addColorStop(1,    `hsla(${d.hue}, 80%, 38%, 0)`);

        ctx.globalAlpha = a;
        ctx.fillStyle   = dg;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();

        // tiny specular highlight on each droplet
        ctx.globalAlpha = a * 0.75;
        ctx.fillStyle = "rgba(255,240,250,0.80)";
        ctx.beginPath();
        ctx.ellipse(-rx * 0.28, -ry * 0.32, rx * 0.18, ry * 0.14, -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click",     onClick);
      window.removeEventListener("resize",    resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 767px), (hover: none) and (pointer: coarse) {
          .pink-slime-canvas { display: none !important; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pink-slime-canvas"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          display: "block",
        }}
      />
    </>
  );
}
