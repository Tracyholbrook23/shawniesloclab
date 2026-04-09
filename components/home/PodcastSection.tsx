import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function PodcastSection() {
  return (
    <section className="relative min-h-[680px] md:min-h-[720px] bg-black text-white overflow-hidden flex items-center">

      {/* Left — Text, constrained so image has room to breathe */}
      <div className="relative z-10 w-full md:w-[50%] px-8 md:px-16 lg:px-24 py-24">
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
            The Podcast
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            LOC'd Down<br />at the Lab
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
            Unfiltered conversations about loc care, hair health,
            business, and the culture. New episodes every week.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <Button variant="pink" href="/podcast">
            Watch Episodes
          </Button>
        </FadeIn>
      </div>

      {/* Right — Image pinned to the right edge, no container box */}
      <FadeIn
        direction="left"
        delay={0.15}
        className="absolute right-0 top-0 h-full w-[52%] hidden md:block"
      >
        <Image
          src="/images/shawnie/podcast-shawnie.jpeg"
          alt="Shawnie — host of LOC'd Down at the Lab"
          fill
          className="object-cover object-top"
          sizes="52vw"
        />
        {/* Very light left blend — just softens the hard meeting point */}
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </FadeIn>

      {/* Mobile image */}
      <div className="md:hidden absolute bottom-0 right-0 w-2/3 h-64 opacity-20">
        <Image
          src="/images/shawnie/podcast-shawnie.jpeg"
          alt="Shawnie — host of LOC'd Down at the Lab"
          fill
          className="object-cover object-top"
          sizes="66vw"
        />
      </div>

    </section>
  );
}
