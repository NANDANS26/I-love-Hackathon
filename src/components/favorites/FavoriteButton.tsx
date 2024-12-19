import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from '../ui/Tooltip';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
  className = ''
}) => {
  return (
    <Tooltip content={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className={`p-2 rounded-full transition-colors ${
          isFavorite
            ? 'bg-red-50 text-red-500'
            : 'bg-gray-50 text-gray-400 hover:text-red-500'
        } ${className}`}
      >
        <Heart
          className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
        />
      </motion.button>
    </Tooltip>
  );
};