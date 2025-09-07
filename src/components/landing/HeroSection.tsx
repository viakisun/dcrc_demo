'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MoveRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { heroContent } from '@/lib/landing-content';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export const HeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.2;
      globeRef.current.pointOfView({ lat: 37.5665, lng: 126.9780, altitude: 2.5 });
    }
  }, []);

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: `rgba(0, 255, 255, ${Math.random() * 0.6 + 0.2})`,
    stroke: 0.4,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#00ffff"
          atmosphereAltitude={0.25}
          arcsData={arcsData}
          arcColor={'color'}
          arcDashLength={0.4}
          arcDashGap={2}
          arcDashAnimateTime={2000}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-mono text-lg text-darc-cyan uppercase tracking-widest">{heroContent.subheadline}</h1>
          <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] my-4">
            {heroContent.headline}
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
            {heroContent.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-darc-cyan text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2">
            <span>{heroContent.buttons.primary}</span>
            <MoveRight size={20} />
          </button>
          <button className="bg-transparent border border-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-colors">
            {heroContent.buttons.secondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-cyan-300" />
        </motion.div>
      </div>
    </section>
  );
};
