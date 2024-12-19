import React from 'react';
import { Card } from '../ui/Card';
import { TrendingUp, Star, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

interface TrendingPlaceProps {
  place: {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    location: {
      address: string;
    };
    trending: {
      rank: number;
      searchVolume: number;
      growthRate: number;
      category: string;
    };
  };
}

export const TrendingPlaceCard: React.FC<TrendingPlaceProps> = ({ place }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <TrendingUp className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium">#{place.trending.rank}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{place.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {place.location.address}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{place.description}</p>
        
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Search Volume</span>
            <span className="font-medium text-gray-900">
              {place.trending.searchVolume.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Growth Rate</span>
            <span className="font-medium text-green-600">
              +{place.trending.growthRate}%
            </span>
          </div>
        </div>

        <Button variant="primary" className="w-full">
          Explore More
        </Button>
      </div>
    </Card>
  );
};