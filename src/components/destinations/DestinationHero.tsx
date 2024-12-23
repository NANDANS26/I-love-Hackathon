import React from 'react';
import { motion } from 'framer-motion';
import { Rating } from '../ui/Rating';

interface DestinationHeroProps {
  name: string;
  image: string;
  rating: number;
  ecoCertified: boolean;
  description: string;
}

export const DestinationHero: React.FC<DestinationHeroProps> = ({
  name,
  image,
  rating,
  ecoCertified,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {ecoCertified && (
          <div className="absolute top-4 right-4 bg-green-500/90 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            Eco Certified
          </div>
        )}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <Rating value={rating} />
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};