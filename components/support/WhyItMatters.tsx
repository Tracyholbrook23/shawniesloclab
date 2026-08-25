import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const pillars = [
  {
    label: "Licensed & Credentialed",
    description:
      "State licensure means every service in the lab is backed by real training — not just years in the chair.",
  },
  {
    label: "One Stop For Clients",
    description:
      "No more referring clients out for a cut or color. Book once, leave fully done.",
  },
  {
    label: "Building What's Next",
    description:
      "This is step one toward the salon suite, the product line, and the classes I want to teach.",
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className="py-24 md:py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <FadeIn direction="right" className="relative w-full aspect-[3/4]">
          <Image
            src="/images/shawnie/why-shawnie.jpeg"
            alt="Shawnie at work — the craft behind the license"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-3.5">
              Why This Matters
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#180D14] mb-5 leading-tight">
              This isn&rsquo;t just a class.
              <br />
              It&rsquo;s the next chapter of the lab.
            </h2>
          </FadeIn>
          <FadeIn delay={0.26}>
            <p className="text-[#6B5560] leading-relaxed mb-9 max-w-md">
              A cosmetology license means I can legally expand what happens in
              this chair — cuts, color, chemical services — without sending
              clients elsewhere. It&rsquo;s the difference between &ldquo;loc
              specialist&rdquo; and full-service stylist, and it changes what
              this lab can become.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.label} delay={0.32 + i * 0.08}>
                <div className="flex gap-4.5">
                  <div className="w-[2px] bg-[#E0448E] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase text-[#180D14] mb-1">
                      {pillar.label}
                    </p>
                    <p className="text-[#6B5560] text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
