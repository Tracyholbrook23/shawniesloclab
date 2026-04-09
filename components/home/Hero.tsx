import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left — Text Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0">
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Est. Lansing, MI
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-none mb-6">
            Shawnie's<br />Loc Lab
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg text-gray-400 max-w-sm mb-10 leading-relaxed italic">
            Quote coming soon.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              href="https://shawnieholbrook.booksy.com"
              target="_blank"
            >
              Book Appointment
            </Button>
            <Button variant="outline" href="https://benable.com/i/R4E5C?utm_campaign=v1-0425&utm_content=807109&utm_medium=onboarding-profile-share&utm_source=ig" target="_blank">Shop Hair Care</Button>
          </div>
        </FadeIn>
      </div>

      {/* Right — Hero Image */}
      <FadeIn
        direction="left"
        delay={0.2}
        className="relative w-full md:w-[45%] lg:w-[42%] min-h-[60vh] md:min-h-screen bg-gray-50 overflow-hidden"
      >
        <Image
          src="/images/shawnie/hero-shawnie.jpeg"
          alt="Shawnie — Loc Lab founder"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </FadeIn>
    </section>
  );
}
