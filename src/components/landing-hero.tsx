'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const LandingHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      >
        {/* Using a generic, high-quality stock video for placeholder */}
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-winding-road-in-a-forest-5546/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70"></div>

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
