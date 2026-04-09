import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import WhySection from "@/components/home/WhySection";
import SocialProof from "@/components/home/SocialProof";
import AboutSection from "@/components/home/AboutSection";
import ProductSection from "@/components/home/ProductSection";
import PodcastSection from "@/components/home/PodcastSection";
import StreamSection from "@/components/home/StreamSection";
import SocialSection from "@/components/home/SocialSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickAccess />
      <WhySection />
      <SocialProof />
      <AboutSection />
      <ProductSection />
      <PodcastSection />
      <StreamSection />
      <SocialSection />
    </main>
  );
}
