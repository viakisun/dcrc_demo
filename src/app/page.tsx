import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { SampleShowcase } from '@/components/landing/SampleShowcase';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <SampleShowcase />
    </main>
  );
}
