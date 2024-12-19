import React from 'react';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from '../ui/Tooltip';

interface CompareButtonProps {
  isSelected: boolean;
  onToggle: () => void;
  className?: string;
}

export const CompareButton: React.FC<CompareButtonProps> = ({
  isSelected,
  onToggle,
  className = ''
}) => {
  return (
    <Tooltip content={isSelected ? 'Remove from comparison' : 'Add to comparison'}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className={`p-2 rounded-full transition-colors ${
          isSelected
            ? 'bg-teal-50 text-teal-500'
            : 'bg-gray-50 text-gray-400 hover:text-teal-500'
        } ${className}`}
      >
        <Scale className="w-5 h-5" />
      </motion.button>
    </Tooltip>
  );
};