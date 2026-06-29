"use client";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: "100svh", minHeight: 500 }}>

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
        }}
      />

      {/* Invisible button overlay — desktop */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none" }}>
        <a
          href="https://shawnieholbrook.booksy.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book Appointment"
          className="hidden md:block"
          style={{
            position: "absolute",
            left: "50%",
            top: "72%",
            transform: "translateX(-50%)",
            width: 240,
            height: 60,
            borderRadius: 999,
            background: "transparent",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        />

        {/* Mobile — Spline button shifts lower on small screens */}
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
            pointerEvents: "auto",
          }}
        />
      </div>

    </section>
  );
}
