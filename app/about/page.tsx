import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Shawnie's Loc Lab",
  description:
    "Meet Shawnie — loc specialist, educator, entrepreneur, and founder of Shawnie's Loc Lab.",
};

const credentials = [
  { label: "Specialty", value: "Loc Installation, Maintenance & Repair" },
  { label: "Experience", value: "7+ Years in Natural Hair Care" },
  { label: "Based In", value: "Lansing, MI — Michigan State University" },
  { label: "Originally From", value: "Lansing, MI" },
  { label: "Also Known For", value: "Podcast Host · Streamer · Educator" },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* ── HERO ── */}
      <section className="min-h-[70vh] flex flex-col md:flex-row">
        {/* Left text */}
        <div className="flex-1 flex flex-col justify-end px-8 md:px-16 lg:px-24 py-16">
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
              The Founder
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              Shawnie<br />Holbrook
            </h1>
          </FadeIn>
        </div>

        {/* Right image */}
        <FadeIn
          direction="left"
          delay={0.15}
          className="relative w-full md:w-[45%] min-h-[50vh] md:min-h-[70vh] bg-gray-50 overflow-hidden"
        >
          <Image
            src="/images/shawnie/about-hero.jpeg"
            alt="Shawnie Holbrook — founder of Shawnie's Loc Lab"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </FadeIn>
      </section>

      {/* ── BIO ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-16 items-start">

          {/* Credentials */}
          <FadeIn direction="right">
            <div className="space-y-6">
              {credentials.map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.08}>
                  <div className="flex flex-col gap-1 border-b border-gray-100 pb-5">
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-base font-medium text-black">
                      {item.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Bio text */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                More than a stylist.<br />A whole movement.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Shawnie Holbrook is a loc specialist, entrepreneur, and educator
                  who turned a deep love for natural hair into one of the most
                  recognized brands in the loc community. Based in Lansing, Michigan
                  on the campus of Michigan State University, Shawnie built her
                  career from the ground up — chair by chair, client by client.
                </p>
                <p>
                  What sets Shawnie apart isn't just her technique — it's her
                  philosophy. She approaches every head of hair like a scientist:
                  diagnosing, formulating, and executing with precision. No two
                  clients are alike, and no two appointments are treated the same.
                </p>
                <p>
                  In 2020 she founded Shawnie's Loc Lab, a brand that goes beyond
                  the salon. From her growing product line to her podcast, her
                  Twitch streams, and her educational content, Shawnie is building
                  a full ecosystem around loc culture — one that educates,
                  entertains, and empowers.
                </p>
                <p>
                  She believes locs are more than a hairstyle. They're identity.
                  They're legacy. And they deserve to be treated with the highest
                  level of care and expertise.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── LAB IMAGE BREAK ── */}
      <FadeIn>
        <section className="relative w-full aspect-[16/7] overflow-hidden bg-gray-50">
          <Image
            src="/images/shawnie/about-lab.jpeg"
            alt="Shawnie in the lab"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </section>
      </FadeIn>

      {/* ── WHAT SHE DOES ── */}
      <section className="py-24 md:py-32 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              What She Does
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 leading-tight max-w-lg">
              The lab has many rooms.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "The Chair",
                body:
                  "Precision loc services — installation, maintenance, repair, and styling. Every appointment is an experience.",
              },
              {
                title: "The Shop",
                body:
                  "Curated products and formulas for loc health and scalp care. Science-tested. Community-approved.",
              },
              {
                title: "The Podcast",
                body:
                  "Real conversations about hair, business, culture, and life. No filter, no fluff.",
              },
              {
                title: "The Stream",
                body:
                  "Live on Twitch — Q&As, behind-the-scenes, and community sessions you don't want to miss.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div>
                  <div className="w-8 h-px bg-black mb-5" />
                  <p className="text-sm font-semibold tracking-widest uppercase text-black mb-3">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-black text-white text-center px-6">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-5">
            Ready?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Book with Shawnie.
          </h2>
          <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed">
            Limited slots available. Secure your appointment before they're gone.
          </p>
          <Button
            variant="primary"
            href="https://shawnieholbrook.booksy.com"
            target="_blank"
            className="bg-white text-black hover:opacity-75"
          >
            Book Appointment
          </Button>
        </FadeIn>
      </section>

    </main>
  );
}
