import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function ProductSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-4">
            Hair Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
            SLL Scalp Formulas
          </h2>
          <p className="text-gray-400 mb-14 max-w-md leading-relaxed">
            Science-backed formulas built for loc health. Developed in the lab, tested by the community.
          </p>
        </FadeIn>

        {/* Coming Soon card */}
        <FadeIn delay={0.15}>
          <div className="border border-[#F472B6]/30 bg-[#FCE7F3]/20 p-14 flex flex-col items-center justify-center text-center gap-6 min-h-[300px]">
            {/* Flask icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3h6M9 3v7l-4.5 9A2 2 0 0 0 6.5 22h11a2 2 0 0 0 2-1l-4.5-9V3" />
              <line x1="6" y1="14" x2="18" y2="14" />
            </svg>
            <div>
              <p className="text-xl font-bold tracking-tight text-black mb-2">
                Coming Soon
              </p>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                The SLL product line is in development. Stay close — the formulas are almost ready.
              </p>
            </div>
            <Button
              variant="pink"
              href="https://benable.com/i/R4E5C?utm_campaign=v1-0425&utm_content=807109&utm_medium=onboarding-profile-share&utm_source=ig"
              target="_blank"
            >
              Shop Hair Care
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
