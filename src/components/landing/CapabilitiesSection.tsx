'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { capabilitiesContent } from '@/lib/landing-content';

export const CapabilitiesSection = () => {
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
          {capabilitiesContent.title}
        </motion.h2>
        <div className="space-y-20">
          {capabilitiesContent.capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`md:${index % 2 !== 0 ? 'col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold text-darc-cyan mb-4 font-heading">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </div>
              <div className="h-64 bg-gray-800 rounded-lg border border-cyan-300/20">
                {/* Using an img tag for external URLs. Next/Image would require config. */}
                <img src={capability.image} alt={capability.title} className="w-full h-full object-cover rounded-lg opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
