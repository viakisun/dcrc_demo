import React from 'react';
import { motion } from 'framer-motion';

interface WidgetProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Widget = ({ title, children, className, icon }: WidgetProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-black/50 backdrop-blur-md border border-cyan-300/20 rounded-lg shadow-lg shadow-cyan-500/10 ${className}`}
    >
      <div className="p-3 border-b border-cyan-300/20">
        <h3 className="text-sm font-bold text-cyan-300 flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};
