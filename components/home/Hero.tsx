"use client";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: "100svh", minHeight: 600 }}>

      {/* Spline full-screen hero */}
      <iframe
        src="https://my.spline.design/creatorcafeheropage-hdLoPYXAvnsY5GrZAxOIb1El/"
        frameBorder="0"
        title="Shawnie's Loc Lab hero"
        loading="eager"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* Invisible clickable button over the Spline "GET STARTED" button */}
      <a
        href="https://shawnieholbrook.booksy.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment"
        style={{
          position: "absolute",
          left: "50%",
          top: "72%",
          transform: "translateX(-50%)",
          width: 220,
          height: 56,
          borderRadius: 999,
          background: "transparent",
          cursor: "pointer",
          zIndex: 10,
          display: "block",
        }}
      />

    </section>
  );
}
