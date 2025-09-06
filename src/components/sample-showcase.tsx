'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Sample {
  id: string;
  route: string;
  title: string;
  description: string;
}

interface SampleShowcaseProps {
  samples: Sample[];
}

export const SampleShowcase = ({ samples }: SampleShowcaseProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
        >
            Interactive Demonstrations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samples.map((sample, index) => (
                <motion.div
                    key={sample.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                    <Link href={sample.route} passHref>
                        <div className="h-full bg-gray-900/50 border border-cyan-300/20 rounded-xl p-6 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all cursor-pointer flex flex-col">
                            <h3 className="text-xl font-bold text-cyan-300 mb-2">{sample.title}</h3>
                            <p className="text-gray-400 text-sm flex-grow">{sample.description}</p>
                            <div className="mt-4 text-right text-cyan-400 font-semibold">
                                Launch Demo &rarr;
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    </div>
  );
};
