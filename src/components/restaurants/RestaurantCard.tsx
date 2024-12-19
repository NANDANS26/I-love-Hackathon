import React from 'react';
import { MapPin, Star, Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Restaurant } from '../../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        {restaurant.verified && (
          <div className="absolute top-4 right-4 bg-teal-500 text-white p-2 rounded-full">
            <Check className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
            {restaurant.priceRange}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{restaurant.location.address}</span>
          </div>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {restaurant.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};