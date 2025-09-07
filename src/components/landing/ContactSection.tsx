'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactContent } from '@/lib/landing-content';
import { Mail, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-heading"
            >
              {contactContent.title}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
                {contactContent.sections.map((section, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="bg-gray-800/50 p-8 rounded-xl border border-cyan-300/10 flex flex-col"
                    >
                        <h3 className="text-xl font-bold text-darc-cyan mb-3 font-heading">{section.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">{section.description}</p>
                        <a href={`mailto:${section.email}`} className="text-sm font-semibold text-white bg-darc-secondary/80 hover:bg-darc-secondary rounded-full py-2 px-4 text-center transition-colors flex items-center justify-center gap-2">
                            <span>{section.buttonText}</span>
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
