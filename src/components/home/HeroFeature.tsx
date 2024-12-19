import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const HeroFeature: React.FC<HeroFeatureProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 rounded-2xl"
    >
      <div className="text-white mb-3">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </motion.div>
  );
};