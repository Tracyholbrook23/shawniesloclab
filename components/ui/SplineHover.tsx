"use client";

/**
 * Spline hover + scroll effect scene.
 * Embedded via iframe — no TypeScript web-component issues.
 *
 * aria-hidden: decorative only.
 * loading="lazy": deferred until near viewport.
 */
export function SplineHover() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full h-full min-h-[340px]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <iframe
        src="https://my.spline.design/hoverscrolleffect-NRWbzhYKegjRa7rbvu4SkxcG/"
        frameBorder="0"
        title="Interactive 3D scene"
        loading="lazy"
        className="w-full h-full"
        style={{ display: "block", minHeight: "340px" }}
      />
    </div>
  );
}
