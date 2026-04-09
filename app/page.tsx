import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import SocialProof from "@/components/home/SocialProof";
import ProductSection from "@/components/home/ProductSection";
import PodcastSection from "@/components/home/PodcastSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhySection />
      <SocialProof />
      <ProductSection />
      <PodcastSection />
    </main>
  );
}
