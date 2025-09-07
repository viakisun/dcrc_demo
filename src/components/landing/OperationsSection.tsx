'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { operationsContent } from '@/lib/landing-content';
import { Users, Clock } from 'lucide-react';

export const OperationsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-heading"
        >
          {operationsContent.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-bold text-darc-cyan mb-4 flex items-center gap-3">{operationsContent.commandStructure.icon} {operationsContent.commandStructure.title}</h3>
                <div className="space-y-4">
                    {operationsContent.commandStructure.tiers.map((tier, i) => (
                        <div key={i} className="p-4 bg-gray-800/50 border border-cyan-300/10 rounded-lg">
                            <p className="font-bold text-white">{tier.level}</p>
                            <p className="text-gray-400 text-sm">{tier.role}: {tier.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-2xl font-bold text-darc-cyan mb-4 flex items-center gap-3">{operationsContent.operationsCycle.icon} {operationsContent.operationsCycle.title}</h3>
                <div className="space-y-4">
                    {operationsContent.operationsCycle.shifts.map((shift, i) => (
                         <div key={i} className="p-4 bg-gray-800/50 border border-cyan-300/10 rounded-lg">
                            <p className="font-bold text-white">{shift.name} ({shift.time})</p>
                            <p className="text-gray-400 text-sm">{shift.focus}</p>
                             <p className="text-xs text-darc-cyan mt-1">{shift.staff}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
