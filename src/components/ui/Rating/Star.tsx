import React from 'react';
import { Star as StarIcon, StarHalf } from 'lucide-react';

interface StarProps {
  filled?: boolean;
  half?: boolean;
}

export const Star: React.FC<StarProps> = ({ filled, half }) => {
  if (half) {
    return <StarHalf className="w-5 h-5 text-yellow-400" />;
  }
  
  return (
    <StarIcon 
      className={`w-5 h-5 ${
        filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
      }`}
    />
  );
};