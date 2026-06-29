"use client";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: "100svh", minHeight: 500 }}>

      <style>{`
        @media (max-width: 767px) {
          .spline-hero { pointer-events: none !important; }
        }
      `}</style>

      {/* Spline full-screen hero */}
      <iframe
        src="https://my.spline.design/creatorcafeheropage-hdLoPYXAvnsY5GrZAxOIb1El/"
        frameBorder="0"
        title="Shawnie's Loc Lab hero"
        loading="eager"
        className="spline-hero"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />

      {/* Single invisible button overlay for all screen sizes */}
      <a
        href="https://shawnieholbrook.booksy.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment"
        style={{
          position: "absolute",
          left: "50%",
          top: "58%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 40%, 300px)",
          height: 70,
          borderRadius: 999,
          background: "transparent",
          cursor: "pointer",
          zIndex: 20,
          border: "none",
          outline: "none",
          display: "block",
        }}
      />

    </section>
  );
}
