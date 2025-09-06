import { LandingHero } from '@/components/landing-hero';
import { FeatureCard } from '@/components/feature-card';
import { SampleShowcase } from '@/components/sample-showcase';
import { Layers, BrainCircuit, ShieldAlert, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe size={32} />,
    title: "통합 관제 시스템",
    description: "전 세계의 모든 드론 자산을 단일 인터페이스에서 실시간으로 추적하고 관리합니다."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI 기반 위협 분석",
    description: "머신러닝 알고리즘을 통해 이상 징후를 조기에 감지하고 잠재적 위협을 예측합니다."
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "자동화된 대응 체계",
    description: "사전에 정의된 교전 규칙에 따라 위협에 대한 자동 대응 및 방어 시스템을 활성화합니다."
  },
  {
    icon: <Layers size={32} />,
    title: "다층 데이터 융합",
    description: "위성, 레이더, 현장 보고 등 다양한 소스의 데이터를 융합하여 완벽한 상황 인식을 제공합니다."
  }
];

const samples = [
    { id: 'rokaf-mcrc-advanced-v2', route: '/samples/rokaf-mcrc-advanced-v2', title: 'MCRC Advanced V2', description: 'Master Control & Reporting Center' },
    { id: 'rokaf-sector-ke14-operations', route: '/samples/rokaf-sector-ke14-operations', title: 'Sector KE-14 Ops', description: 'Detailed Sector Operations' },
    { id: 'rokaf-radar-controller-workstation', route: '/samples/rokaf-radar-controller-workstation', title: 'Radar Controller WS', description: 'Radar Control Workstation' },
    { id: 'rokaf-data-analyst-workstation', route: '/samples/rokaf-data-analyst-workstation', title: 'Data Analyst WS', description: 'Data Analysis & Intel' },
    { id: 'rokaf-flight-controller-workstation', route: '/samples/rokaf-flight-controller-workstation', title: 'Flight Controller WS', description: 'Aircraft Vectoring Control' },
    { id: 'comm-coordinator-workstation', route: '/samples/comm-coordinator-workstation', title: 'Comm Coordinator WS', description: 'Communications Management' },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <LandingHero />

      <div className="relative z-10 bg-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            The Future of Command & Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-black py-20 px-4 border-t border-cyan-300/10">
        <SampleShowcase samples={samples} />
      </div>
    </main>
  );
}
