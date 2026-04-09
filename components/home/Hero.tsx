import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left — Text Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
          Est. Atlanta, GA
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-none mb-6">
          Shawnie's<br />Loc Lab
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-sm mb-10 leading-relaxed">
          Where precision meets style. Welcome to the lab.
        </p>
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
      </div>

      {/* Right — Hero Image */}
      <div className="relative w-full md:w-[45%] lg:w-[42%] min-h-[60vh] md:min-h-screen bg-gray-50 overflow-hidden">
        <Image
          src="/images/shawnie/hero-shawnie.jpeg"
          alt="Shawnie — Loc Lab founder"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
    </section>
  );
}
