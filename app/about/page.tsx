import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Shawnie's Loc Lab",
  description:
    "Meet Shawnie, loc specialist, educator, entrepreneur, and founder of Shawnie's Loc Lab.",
};

const credentials = [
  { label: "Specialty", value: "Loc Installation, Maintenance & Repair" },
  { label: "Experience", value: "7+ Years in Natural Hair Care" },
  { label: "Based In", value: "Lansing, MI · Michigan State University" },
  { label: "Originally From", value: "Lansing, MI" },
  { label: "Also Known For", value: "Podcast Host · Streamer · Educator" },
];

export default function AboutPage() {
  return (
    <main className="bg-transparent text-[#180D14]">

      {/* ── HERO — full-bleed photo, text anchored bottom-left ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: 460, height: "60vh" }}
      >
        <Image
          src="/images/shawnie/about-hero.jpeg"
          alt="Shawnie Holbrook, founder of Shawnie's Loc Lab"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(27,15,22,0.85) 0%, rgba(27,15,22,0.1) 55%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-12">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-3.5 font-bold">
              The Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[44px] md:text-[62px] font-extrabold tracking-tight text-white leading-[1.02]">
              Shawnie Holbrook
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="py-24 md:py-28 border-t border-[#E0448E]/15">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">

            {/* Left — credentials card */}
            <FadeIn direction="right">
              <div className="bg-[#FCE7F1]/20 border border-[#E0448E]/10 px-7 py-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#E0448E] mb-7">
                  The File
                </p>
                {credentials.map((item, i) => (
                  <FadeIn key={item.label} delay={i * 0.06}>
                    <div className={`py-3.5 ${i < credentials.length - 1 ? "border-b border-[#E0448E]/10" : ""}`}>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A7580] mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-[#180D14] leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            {/* Right — bio */}
            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 leading-tight">
                  More than a stylist.<br />A whole movement.
                </h2>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.18}>
                  <p className="text-sm text-[#6B5560] leading-relaxed">
                    Shawnie Holbrook is a loc specialist, entrepreneur, and educator
                    who turned a deep love for natural hair into one of the most
                    recognized brands in the loc community. Based in Lansing, Michigan
                    on the campus of Michigan State University, she built her career
                    from the ground up, chair by chair, client by client.
                  </p>
                </FadeIn>

                <FadeIn delay={0.24}>
                  <p className="text-sm text-[#6B5560] leading-relaxed">
                    What sets Shawnie apart isn't just her technique. It's her
                    philosophy. She approaches every head of hair like a scientist:
                    diagnosing, formulating, and executing with precision. No two
                    clients are alike, and no two appointments are treated the same.
                  </p>
                </FadeIn>

                <FadeIn delay={0.30}>
                  <p className="text-sm text-[#6B5560] leading-relaxed">
                    In 2020 she founded Shawnie's Loc Lab, a brand that goes beyond
                    the salon. From her growing product line to her podcast and Twitch
                    streams, she's building a full ecosystem around loc culture that
                    educates, entertains, and empowers.
                  </p>
                </FadeIn>

                <FadeIn delay={0.36}>
                  <div className="border-t border-gray-100 pt-6 mt-2">
                    <p className="text-sm font-semibold text-[#180D14] leading-relaxed">
                      She believes locs are more than a hairstyle. They're identity.
                      They're legacy. And they deserve to be treated with the highest
                      level of care and expertise.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT SHE DOES ── */}
      <section className="py-24 md:py-32 bg-[#1B0F16] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 items-end">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-4 font-bold">
                What She Does
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                The lab has<br />many rooms.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-white/60 leading-relaxed md:max-w-sm md:ml-auto">
                Shawnie operates across multiple spaces: the salon chair, the studio, the screen, and the shelf. Each one is intentional.
              </p>
            </FadeIn>
          </div>

          {/* Pillars — horizontal rule layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              {
                title: "The Chair",
                body: "Precision loc services: installation, maintenance, repair, and styling. Every appointment is an experience.",
              },
              {
                title: "The Shop",
                body: "Curated products and formulas for loc health and scalp care. Science-tested. Community-approved.",
              },
              {
                title: "The Podcast",
                body: "Real conversations about hair, business, culture, and life. No filter, no fluff.",
              },
              {
                title: "The Stream",
                body: "Live on Twitch: Q&As, behind-the-scenes, and community sessions you don't want to miss.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-[#1B0F16] p-8 h-full">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#F0A8CE] font-bold mb-4">
                    0{i + 1}
                  </p>
                  <p className="text-sm font-bold tracking-widest uppercase mb-3">
                    {item.title}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 text-center px-6 overflow-hidden border-t border-[#E0448E]/15">

        {/* Soft pink radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(224,68,142,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-5">
              Ready?
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#180D14] mb-6 leading-tight">
              Book with Shawnie.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#6B5560] max-w-sm mx-auto mb-10 leading-relaxed">
              Limited slots available. Secure your appointment before they're gone.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button
              variant="pink"
              href="https://shawnieholbrook.booksy.com"
              target="_blank"
            >
              Book Appointment
            </Button>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
