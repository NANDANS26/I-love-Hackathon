import React from 'react';
import { Star } from 'lucide-react';

interface PlaceDetailsHeaderProps {
  name: string;
  description: string;
  rating: number;
  image: string;
  onClose: () => void;
}

export const PlaceDetailsHeader: React.FC<PlaceDetailsHeaderProps> = ({
  name,
  description,
  rating,
  image,
  onClose
}) => {
  return (
    <>
      <div className="relative h-64 md:h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white"
        >
          ×
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};