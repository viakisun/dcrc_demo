'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Widget } from './ui/widget';
import { AlertTriangle, ShieldCheck, Layers } from 'lucide-react';

const Globe = dynamic(() => import('@/components/ui/globe'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-black text-cyan-300">Loading Globe...</div>,
});

interface PageManifest {
  id: string;
  route: string;
  title: string;
}

// NOTE: This is a simplified version for the dashboard.
// In a real app, this would be fetched via an API route.
const sampleManifest: PageManifest[] = [
    { id: 'rokaf-mcrc-advanced-v2', route: '/samples/rokaf-mcrc-advanced-v2', title: 'MCRC Advanced V2' },
    { id: 'rokaf-sector-ke14-operations', route: '/samples/rokaf-sector-ke14-operations', title: 'Sector KE-14 Ops' },
    { id: 'rokaf-radar-controller-workstation', route: '/samples/rokaf-radar-controller-workstation', title: 'Radar Controller WS' },
    { id: 'rokaf-data-analyst-workstation', route: '/samples/rokaf-data-analyst-workstation', title: 'Data Analyst WS' },
    { id: 'rokaf-flight-controller-workstation', route: '/samples/rokaf-flight-controller-workstation', title: 'Flight Controller WS' },
    { id: 'comm-coordinator-workstation', route: '/samples/comm-coordinator-workstation', title: 'Comm Coordinator WS' },
];


export function DarcDashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-screen bg-black flex items-center justify-center text-cyan-300 animate-pulse">Initializing DARC System...</div>;
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Globe Background */}
        <div className="absolute inset-0 z-0 opacity-70">
            <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                atmosphereColor="cyan"
                atmosphereAltitude={0.2}
            />
        </div>

        {/* HUD Gridlines & Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full" style={{
                background: 'radial-gradient(circle, rgba(0,255,255,0.2) 1px, transparent 1px), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0,255,255,0.1) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(0,255,255,0.1) 50px)',
                backgroundSize: '50px 50px, 100% 50px, 50px 100%',
            }}></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(5,200,255,0.3),rgba(255,255,255,0))]"></div>
        </div>


        {/* Main UI Layer */}
        <div className="absolute inset-0 z-20 flex flex-col">
            <header className="p-4 text-center bg-black/50 backdrop-blur-sm border-b border-cyan-300/20">
                <h1 className="text-2xl font-bold text-cyan-300 tracking-widest animate-pulse">
                    DCRC - GLOBAL COMMAND VIEW
                </h1>
            </header>

            <main className="flex-1 grid grid-cols-12 grid-rows-6 gap-4 p-4">
                <div className="col-span-3 row-span-2">
                    <Widget title="THREAT LEVEL" icon={<AlertTriangle size={16} />}>
                        <div className="text-5xl font-bold text-red-500 text-center animate-pulse">
                            HIGH
                        </div>
                        <p className="text-center text-xs text-red-300 mt-2">Multiple Hostile Tracks Detected</p>
                    </Widget>
                </div>

                <div className="col-start-10 col-span-3 row-span-2">
                     <Widget title="SYSTEM STATUS" icon={<ShieldCheck size={16} />}>
                        <div className="text-2xl font-bold text-green-400 text-center">
                            ALL SYSTEMS NOMINAL
                        </div>
                        <p className="text-center text-xs text-green-300 mt-2">Network Latency: 12ms</p>
                    </Widget>
                </div>

                <div className="col-span-3 row-start-3 row-span-4">
                    <Widget title="ACTIVE TRACKS" className="h-full flex flex-col">
                        <div className="text-xs space-y-2 flex-grow">
                            <div className="flex justify-between"><span>Friendly:</span> <span className="text-green-400">8</span></div>
                            <div className="flex justify-between"><span>Unknown:</span> <span className="text-yellow-400">1</span></div>
                            <div className="flex justify-between"><span>Hostile:</span> <span className="text-red-400">1</span></div>
                            <div className="flex justify-between border-t border-cyan-300/20 mt-2 pt-2"><span>Total:</span> <span className="font-bold">10</span></div>
                        </div>
                    </Widget>
                </div>

                 <div className="col-start-10 col-span-3 row-start-3 row-span-4">
                    <Widget title="SECTOR STATUS" className="h-full flex flex-col">
                         <div className="text-xs space-y-2 text-gray-400 flex-grow">
                            <div className="flex justify-between"><span>JE-10 (INTERCEPT):</span> <span className="text-red-400">HIGH</span></div>
                            <div className="flex justify-between"><span>KE-06 (SCRAMBLE):</span> <span className="text-red-400">CRITICAL</span></div>
                            <div className="flex justify-between"><span>IE-14 (ALERT):</span> <span className="text-yellow-400">MEDIUM</span></div>
                             <div className="flex justify-between"><span>KE-14 (MONITOR):</span> <span className="text-yellow-400">MEDIUM</span></div>
                        </div>
                    </Widget>
                </div>

                <div className="col-span-3 row-start-1">
                     <Widget title="DEMO SAMPLES" icon={<Layers size={16}/>} className="max-h-full flex flex-col">
                        <div className="text-xs space-y-2 overflow-y-auto flex-grow">
                            {sampleManifest.map(sample => (
                                <Link key={sample.id} href={sample.route} passHref>
                                    <div className="block p-2 bg-gray-800/50 hover:bg-cyan-900/50 rounded transition-colors cursor-pointer">
                                        {sample.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Widget>
                </div>
            </main>
        </div>
    </div>
  );
}
