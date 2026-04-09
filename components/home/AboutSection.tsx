import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              Meet the Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-8">
              Hi, I'm Shawnie.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-5 text-gray-500 leading-relaxed max-w-md">
              <p>
                I'm a loc specialist, educator, and entrepreneur based in Lansing, Michigan —
                right on the campus of Michigan State University.
                What started as a passion for natural hair turned into a full-on
                movement — one client, one loc, one formula at a time.
              </p>
              <p>
                At Shawnie's Loc Lab, I combine technique with science to deliver
                results that last. Every service is intentional. Every product is
                tested. Every client leaves feeling like themselves — just elevated.
              </p>
              <p>
                Beyond the chair, I educate, I podcast, I stream, and I build. This
                lab is bigger than hair. It's a lifestyle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Button variant="primary" href="/about">
                Full Story
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
          <Image
            src="/images/shawnie/about-shawnie.jpeg"
            alt="Shawnie — founder of Shawnie's Loc Lab"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </FadeIn>

      </div>
    </section>
  );
}
