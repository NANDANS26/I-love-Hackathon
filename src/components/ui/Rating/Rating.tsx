import React from 'react';
import { Star } from './Star';

interface RatingProps {
  value: number;
  className?: string;
  maxStars?: number;
}

export const Rating: React.FC<RatingProps> = ({ 
  value, 
  className = '',
  maxStars = 5 
}) => {
  // Ensure value is between 0 and maxStars
  const normalizedValue = Math.max(0, Math.min(value, maxStars));
  const fullStars = Math.floor(normalizedValue);
  const hasHalfStar = normalizedValue % 1 >= 0.5;
  
  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star 
          key={`star-${i}`}
          filled={i < fullStars}
          half={i === fullStars && hasHalfStar}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {normalizedValue.toFixed(1)}
      </span>
    </div>
  );
};