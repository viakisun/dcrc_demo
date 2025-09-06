'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-black text-cyan-300">Loading Globe...</div>,
});

export const LandingHero = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.2;
      globeRef.current.pointOfView({ lat: 37.5665, lng: 126.9780, altitude: 2 });
    }
  }, []);

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['#00ffff', '#00ff00', '#ffff00', '#ff0000'][Math.round(Math.random() * 3)], ['#00ffff', '#00ff00', '#ffff00', '#ff0000'][Math.round(Math.random() * 3)]]
  }));

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Globe Background */}
       <div className="absolute inset-0 z-0 opacity-80">
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                atmosphereColor="cyan"
                atmosphereAltitude={0.2}
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
                arcStroke={0.5}
            />
        </div>


      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            DCRC
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-gray-300 tracking-wide">
            차세대 드론 통제 및 보고 센터
          </p>
          <p className="mt-2 text-lg md:text-xl font-light text-gray-400">
            Next-Generation Drone Control & Reporting Center
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-cyan-300" />
        </motion.div>
      </div>
    </div>
  );
};
