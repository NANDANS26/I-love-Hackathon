import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

interface TouristPlaceProps {
  places: {
    id: string;
    name: string;
    description: string;
    image: string;
    location: {
      address: string;
      coordinates: { lat: number; lng: number; }
    };
    rating: number;
    bestTimeToVisit: string;
    thingsToSee: string[];
    activities: string[];
    estimatedCost: {
      currency: string;
      min: number;
      max: number;
    };
  }[];
  onSelect: (placeId: string) => void;
}

export const TouristPlaceList: React.FC<TouristPlaceProps> = ({
  places,
  onSelect
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <Card
          key={place.id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onSelect(place.id)}
        >
          <div className="relative h-48">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {place.name}
            </h3>
            <Rating value={place.rating} className="mb-3" />
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {place.location.address}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {place.bestTimeToVisit}
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                {place.estimatedCost.currency} {place.estimatedCost.min}-
                {place.estimatedCost.max}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};