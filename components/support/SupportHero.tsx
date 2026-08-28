import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function SupportHero() {
  return (
    <section
      className="relative w-full flex items-end overflow-hidden"
      style={{ minHeight: "500px", height: "72vh" }}
    >
      <Image
        src="/images/shawnie/about-hero.jpeg"
        alt="Shawnie at work in the lab"
        fill
        priority
        quality={90}
        className="object-cover"
        style={{ objectPosition: "center 8%" }}
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,15,22,0.6) 0%, rgba(27,15,22,0.2) 35%, rgba(27,15,22,0.82) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, rgba(224,68,142,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-14 flex flex-col gap-5">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F5B8D8] font-bold m-0">
            Lansing, MI · The Next Chapter
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="text-[40px] md:text-[58px] leading-[1.05] font-extrabold tracking-tight text-white max-w-3xl m-0">
            Help me become a licensed cosmetologist.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-base md:text-[17px] leading-relaxed text-white/80 max-w-lg m-0">
            I&rsquo;ve spent years building this lab around loc and braid work, but
            without a cosmetology license, there&rsquo;s a ceiling on what I can
            offer in the chair. Every contribution toward tuition gets me
            closer to a fuller menu, and a bigger future for this community.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="flex flex-wrap gap-3.5 mt-2">
            <a
              href="#goal"
              className="inline-flex items-center px-[30px] py-[15px] bg-[#E0448E] text-white rounded-full text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-[#A81458] transition-colors duration-200"
              style={{ boxShadow: "0 8px 28px rgba(224,68,142,0.4)" }}
            >
              Donate Now
            </a>
            <a
              href="#why"
              className="inline-flex items-center px-[30px] py-[15px] rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-white border border-white/35 hover:bg-white/10 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              Why It Matters
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
