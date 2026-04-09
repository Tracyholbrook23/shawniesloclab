import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      {/* Eyebrow label */}
      <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
        Est. Atlanta, GA
      </p>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6 leading-none">
        Shawnie's Loc Lab
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
        Where precision meets style. Welcome to the lab.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          href="https://shawnieholbrook.booksy.com"
          target="_blank"
        >
          Book Appointment
        </Button>
        <Button variant="outline">Explore</Button>
      </div>
    </section>
  );
}
