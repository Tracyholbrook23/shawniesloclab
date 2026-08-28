import Hero from "@/components/home/Hero";
import HairVideoSection from "@/components/home/HairVideoSection";
import QuickAccess from "@/components/home/QuickAccess";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhySection from "@/components/home/WhySection";
import SocialProof from "@/components/home/SocialProof";
import AboutSection from "@/components/home/AboutSection";
import BeyondTheChairSection from "@/components/home/BeyondTheChairSection";
import ComingFromLabSection from "@/components/home/ComingFromLabSection";
import SocialSection from "@/components/home/SocialSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HairVideoSection />
      <QuickAccess />
      <ServicesSection />
      <FeaturedWork />
      <TestimonialsSection />
      <WhySection />
      <SocialProof />
      <AboutSection />
      <BeyondTheChairSection />
      <ComingFromLabSection />
      <SocialSection />
    </main>
  );
}
