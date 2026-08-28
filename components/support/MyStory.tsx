import FadeIn from "@/components/ui/FadeIn";

export default function MyStory() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-[#180D14] leading-relaxed mb-5">
            Doing hair is so much more than a hobby to me. It&rsquo;s
            something I take pride in, my creative outlet, and one of the
            biggest ways I&rsquo;ve been able to build something of my own.
            It means the world to me.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-[#180D14] leading-relaxed mb-5">
            Through Shawnie&rsquo;s Loc Lab I&rsquo;ve had the privilege to
            work with so many amazing people, grow in my craft and as a
            business owner, and see just how far a professional career in
            this industry could take me. Now I&rsquo;m ready to take it to
            the next step.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-[#180D14] leading-relaxed mb-7">
            Your support will help me invest in my education, which will
            give me the ability to expand my skills, serve my clients even
            better, and open doors to larger opportunities in the beauty
            industry.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="bg-[#FCE7F1] border border-[#E0448E]/20 px-6 py-5 mb-8">
            <p className="text-[#A81458] text-sm leading-relaxed font-medium m-0">
              When you donate towards my education, you&rsquo;re not just
              helping me pay for school, you&rsquo;re investing in my future
              and my clients for years to come.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.32}>
          <p className="italic text-[#180D14] text-lg m-0">
            Thank you for believing in me!{" "}
            <span aria-hidden="true">&#10084;</span>
          </p>
          <p className="italic text-[#8A7580] text-sm mt-1 m-0">
            — Shawnie
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
