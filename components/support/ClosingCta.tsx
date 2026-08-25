import FadeIn from "@/components/ui/FadeIn";

export default function ClosingCta() {
  return (
    <section className="py-[88px] text-center">
      <div className="max-w-xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#E0448E] font-bold mb-3.5">
            One More Push
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="text-3xl md:text-[34px] font-extrabold tracking-tight text-[#180D14] mb-6 leading-tight">
            Ready to help write the next chapter?
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-[#6B5560] leading-relaxed mb-8">
            Every gift — big or small — is a real step toward the chair
            I&rsquo;m building. Thank you for being part of it.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#goal"
              className="inline-flex items-center px-[34px] py-4 bg-[#E0448E] text-white rounded-full text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-[#A81458] transition-colors duration-200"
              style={{ boxShadow: "0 8px 24px rgba(224,68,142,0.3)" }}
            >
              Donate Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
