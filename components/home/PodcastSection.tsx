import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function PodcastSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-5">
              The Podcast & Stream
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Real talk.<br />Real locs.<br />Real results.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Tune in for unfiltered conversations about loc care, hair health,
              business, and the culture. New episodes every week — watch live on
              Twitch or catch up on the podcast.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                href="/watch"
                className="bg-white text-black hover:opacity-75"
              >
                Watch Live
              </Button>
              <Button
                variant="outline"
                href="/podcast"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Listen to Podcast
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/images/shawnie/podcast-shawnie.jpeg"
            alt="Shawnie — host of the Loc Lab podcast"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
