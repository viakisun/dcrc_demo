'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { showcaseContent } from '@/lib/landing-content';

export const SampleShowcase = () => {
  return (
    <section className="py-20 px-4 bg-black border-t border-cyan-300/10">
      <div className="w-full max-w-6xl mx-auto">
          <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-heading"
          >
              {showcaseContent.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseContent.samples.map((sample, index) => (
                  <motion.div
                      key={sample.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                      <Link href={sample.route} passHref>
                          <div className="h-full bg-gray-900/30 border border-cyan-300/20 rounded-xl p-6 hover:bg-cyan-900/50 hover:border-darc-cyan transition-all cursor-pointer flex flex-col group">
                              <h3 className="text-xl font-bold text-cyan-300 mb-2 font-heading group-hover:text-white transition-colors">{sample.title}</h3>
                              <p className="text-gray-400 text-sm flex-grow">{sample.description}</p>
                              <div className="mt-4 text-right text-darc-cyan font-semibold group-hover:text-white transition-colors">
                                  Launch Demo &rarr;
                              </div>
                          </div>
                      </Link>
                  </motion.div>
              ))}
          </div>
      </div>
    </section>
  );
};
