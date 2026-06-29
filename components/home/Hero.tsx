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

      {/* Desktop button overlay */}
      <a
        href="https://shawnieholbrook.booksy.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment"
        className="hidden md:block"
        style={{
          position: "absolute",
          left: "50%",
          top: "61%",
          transform: "translateX(-50%)",
          width: 260,
          height: 64,
          borderRadius: 999,
          background: "transparent",
          cursor: "pointer",
          zIndex: 20,
          border: "none",
          outline: "none",
        }}
      />

      {/* Mobile button overlay */}
      <a
        href="https://shawnieholbrook.booksy.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment"
        className="block md:hidden"
        style={{
          position: "absolute",
          left: "50%",
          top: "68%",
          transform: "translateX(-50%)",
          width: "70%",
          height: 64,
          borderRadius: 999,
          background: "transparent",
          cursor: "pointer",
          zIndex: 20,
        }}
      />

    </section>
  );
}
