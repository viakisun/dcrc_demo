'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/landing-content';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">{aboutContent.definition.title}</h2>
          <p className="text-gray-400 mb-6">{aboutContent.definition.text}</p>
          <ul className="space-y-3">
            {aboutContent.definition.points.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-darc-cyan" />
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-xl border border-cyan-300/20"
        >
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">{aboutContent.mission.title}</h3>
            <div className="mb-6">
                <h4 className="font-bold text-darc-cyan mb-2">Mission</h4>
                <p className="text-gray-400 italic">&quot;{aboutContent.mission.missionText}&quot;</p>
            </div>
            <div>
                <h4 className="font-bold text-darc-cyan mb-2">Vision</h4>
                <p className="text-gray-400 italic">&quot;{aboutContent.mission.visionText}&quot;</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
