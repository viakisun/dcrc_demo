'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { featuresContent } from '@/lib/landing-content';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

export const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-heading"
        >
          {featuresContent.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresContent.features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-cyan-300/20 rounded-xl p-6 text-center backdrop-blur-lg hover:border-darc-cyan hover:bg-gray-800/50 transition-all"
            >
              <div className="mb-4 inline-block text-darc-cyan">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
