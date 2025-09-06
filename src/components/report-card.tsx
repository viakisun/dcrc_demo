import React from 'react';
import Link from 'next/link';

const DocumentReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-6 p-5 bg-gray-800/50 rounded-lg border border-gray-700/80">
    <h2 className="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-300/20 pb-2 flex items-center">
      <DocumentReportIcon /> {title}
    </h2>
    <div className="text-gray-300 space-y-3">{children}</div>
  </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-3 p-3 bg-gray-900/70 rounded-md border border-gray-700/50">
        <h3 className="text-lg font-semibold text-green-300 mb-2">{title}</h3>
        <div className="text-gray-400 space-y-2 prose prose-invert prose-sm max-w-none">{children}</div>
    </div>
);

const StatusTag = ({ text, color }: { text: string; color: 'green' | 'yellow' | 'gray' }) => {
    const colors = {
        green: 'bg-green-500/20 text-green-300 border-green-500/30',
        yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
        gray: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    };
    return <span className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full border ${colors[color]}`}>{text}</span>;
};

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className="p-3 bg-black/50 rounded-md text-gray-300 text-xs overflow-x-auto">
        <code>{children}</code>
    </pre>
);

export const ReportCard = () => {
  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6">
      <div className="bg-gray-900 border-2 border-cyan-400/30 rounded-xl shadow-2xl shadow-cyan-500/10 text-white overflow-hidden">
        <header className="p-6 bg-gray-800 border-b-2 border-cyan-400/30">
          <div className="text-center">
            <p className="text-red-400 font-mono text-base">★★ TOP SECRET // REL TO ROKAF ★★</p>
            <h1 className="text-3xl font-bold text-cyan-300 mt-2">한국군 드론통제보고센터 (DCRC) 시스템 개발계획 보고서</h1>
            <p className="text-gray-400 mt-1 text-sm">보고 일자: 2025년 09월 07일</p>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
             <p>보고 대상: 드론사령관 (소장) | 보고 기관: DCRC 시스템개발팀</p>
          </div>
        </header>

        <main className="p-4 md:p-6">
            <Section title="📝 보고서 요약 (Executive Summary)">
                <SubSection title="사업 개요">
                    <p>한국군 드론사령부(국방부장관 직속)의 차세대 드론통제보고센터(DCRC) 통합관제시스템 개발계획을 보고드립니다. 본 시스템은 한반도 및 인근 해역의 드론 작전을 실시간으로 통제하고 관리하는 전략적 핵심 인프라로 구축될 예정입니다.</p>
                </SubSection>
                <SubSection title="핵심 성과">
                    <ul className="list-disc list-inside pl-2">
                        <li>현재까지 2개 핵심 샘플 페이지 개발 완료</li>
                        <li>총 21개 페이지로 구성된 체계적 개발 로드맵 수립</li>
                        <li>3단계 지휘체계(전략-전술-실무)별 맞춤형 인터페이스 설계</li>
                        <li>12개월 단계별 개발계획 확정</li>
                    </ul>
                </SubSection>
            </Section>

            <Section title="🎯 시스템 개발 목표">
                <SubSection title="전략적 목표">
                    <CodeBlock>{`1. 한반도 및 인근 해역 드론 작전 통합 지휘통제 체계 구축
2. 실시간 50+개 드론 항적 동시 관제 능력 확보
3. 3단계 위협분석 및 대응 시스템 구현
4. 24시간 연속 운영체계 달성`}</CodeBlock>
                </SubSection>
                <SubSection title="기술적 목표">
                    <CodeBlock>{`1. 실시간 데이터 처리 시스템 구축
2. 다중 채널 통신관제 시스템 구현
3. 자동 적아식별 시스템 연동
4. 기상 및 상황 정보 통합 표시`}</CodeBlock>
                </SubSection>
            </Section>

            <Section title="🏛️ 조직 체계 및 사용자 구조">
                <SubSection title="지휘 체계">
                    <CodeBlock>{`국방부장관
    ↓
드론사령관 (⭐⭐ 소장급)
    ↓
섹터 지휘관 (🎯 대령급)
    ↓
전문 운영진 (👨‍💻 위관급/부사관급)`}</CodeBlock>
                </SubSection>
            </Section>

            <Section title="📱 현재 개발 완료 현황">
                <SubSection title="1. DCRC-STRATEGIC-001: 전략적 통합 관제 시스템">
                    <p><strong>샘플명:</strong> &quot;한국군 드론통제보고센터 ROK DCRC 시스템&quot;</p>
                    <p><strong>대상 사용자:</strong> 드론사령관 (⭐⭐ Two-Star Level)</p>
                    <p><strong>개발 상태:</strong> <StatusTag text="✅ 완료" color="green" /></p>
                    <Link href="/samples/rokaf-mcrc-advanced-v2" className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-sm">
                        샘플 페이지 보기
                    </Link>
                </SubSection>
                <SubSection title="2. DCRC-COMM-001: 통신 관제 시스템">
                    <p><strong>샘플명:</strong> &quot;한국공군 통신관제허브 15채널 시스템&quot;</p>
                    <p><strong>대상 사용자:</strong> 통신 관제 전문가</p>
                    <p><strong>개발 상태:</strong> <StatusTag text="✅ 완료" color="green" /></p>
                    <Link href="/samples/comm-coordinator-workstation" className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-sm">
                        샘플 페이지 보기
                    </Link>
                </SubSection>
            </Section>

            <Section title="🗺️ 전체 시스템 개발 계획">
                 <SubSection title="DCRC 핵심 시스템 (15개)">
                    <ul className="list-none space-y-2">
                        <li>DCRC-STRATEGIC-001: 전략적 통합 관제 시스템 <StatusTag text="✅ 완료" color="green" /></li>
                        <li>DCRC-TACTICAL-001~009: 9개 섹터별 관제 시스템 <StatusTag text="추후 제공 예정" color="yellow" /></li>
                        <li>DCRC-COMM-001: 메인 통신 허브 <StatusTag text="✅ 완료" color="green" /></li>
                        <li>DCRC-COMM-002~005: 4개 통신 관제 시스템 <StatusTag text="추후 제공 예정" color="yellow" /></li>
                    </ul>
                </SubSection>
                <SubSection title="전문 운영진 워크스테이션 (6개)">
                     <ul className="list-none space-y-2">
                        <li>DCRC-OPERATOR-001~006 <StatusTag text="추후 제공 예정" color="yellow" /></li>
                    </ul>
                </SubSection>
            </Section>

            <Section title="📅 단계별 개발 일정">
                <p><strong>총 개발 기간: 12개월</strong></p>
                <div className="grid md:grid-cols-3 gap-4">
                    <SubSection title="Phase 1 (6개월)">
                        <p>핵심 기능 구현</p>
                    </SubSection>
                    <SubSection title="Phase 2 (4개월)">
                        <p>확장 기능 구현</p>
                    </SubSection>
                    <SubSection title="Phase 3 (2개월)">
                        <p>통합 및 최적화</p>
                    </SubSection>
                </div>
            </Section>

            <Section title="🎖️ 핵심 운영 요구사항">
                <SubSection title="성능 요구사항">
                    <ul className="list-disc list-inside pl-2">
                        <li>시스템 가용성: 24시간 연속 운영</li>
                        <li>동시 관제: 50+개 드론 항적 실시간 추적</li>
                    </ul>
                </SubSection>
                 <SubSection title="보안 요구사항">
                    <ul className="list-disc list-inside pl-2">
                        <li>분류 등급: TOP SECRET</li>
                        <li>접근 통제: 3단계 권한 체계</li>
                    </ul>
                </SubSection>
            </Section>

            <footer className="mt-8 text-center text-gray-500 text-xs">
                <p>보고서 작성: DCRC 시스템개발팀 | 검토: 드론사령부 기획참모부 | 승인: 드론사령관 (소장)</p>
                <p className="mt-2 font-mono text-red-400">★★ TOP SECRET // REL TO ROKAF ★★</p>
            </footer>
        </main>
      </div>
    </div>
  );
};
