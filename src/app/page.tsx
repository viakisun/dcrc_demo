import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { CapabilitiesSection } from '@/components/landing/CapabilitiesSection';
import { SampleShowcase } from '@/components/landing/SampleShowcase';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CapabilitiesSection />
      <SampleShowcase />
    </main>
  );
}
