'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { innovationContent } from '@/lib/landing-content';
import { Rocket, Globe } from 'lucide-react';

export const InnovationSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-heading"
        >
          {innovationContent.title}
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:col-span-3 bg-gray-900/30 p-8 rounded-xl border border-cyan-300/20"
            >
                <h3 className="text-2xl font-bold text-darc-cyan mb-4 flex items-center gap-3"><Rocket/> {innovationContent.roadmap.title}</h3>
                <div className="relative pl-6 border-l-2 border-cyan-300/30">
                    {/* Current Year */}
                    <div className="mb-8 relative">
                        <div className="absolute -left-[34px] top-1 w-4 h-4 bg-darc-cyan rounded-full animate-pulse"></div>
                        <p className="font-bold text-white text-lg">{innovationContent.roadmap.current.year}</p>
                        <ul className="list-disc list-inside text-gray-400 mt-2">
                            {innovationContent.roadmap.current.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                    {/* Future Years */}
                    {innovationContent.roadmap.future.map((item, i) => (
                         <div key={i} className="mb-6 relative">
                            <div className="absolute -left-[34px] top-1 w-4 h-4 bg-gray-600 rounded-full"></div>
                            <p className="font-bold text-gray-500">{item.year}</p>
                            <p className="text-gray-400">{item.item}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-2 bg-gray-900/30 p-8 rounded-xl border border-cyan-300/20"
            >
                <h3 className="text-2xl font-bold text-darc-cyan mb-4 flex items-center gap-3"><Globe/> {innovationContent.partners.title}</h3>
                <div className="space-y-4">
                    {innovationContent.partners.partners.map((partner, i) => (
                         <div key={i}>
                            <p className="font-bold text-white">{partner.name}</p>
                            <p className="text-gray-400 text-sm">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
