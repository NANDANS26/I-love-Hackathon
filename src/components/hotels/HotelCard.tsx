import React from 'react';
import { Hotel } from '../../types/transport';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { Leaf, Wifi, Coffee, Dumbbell } from 'lucide-react';
import { Button } from '../ui/Button';

interface HotelCardProps {
  hotel: Hotel;
  onBookNow: (hotelId: string) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBookNow }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'restaurant':
      case 'dining':
        return <Coffee className="w-4 h-4" />;
      case 'gym':
        return <Dumbbell className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        {hotel.ecoCertified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
            <Leaf className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
          <span className="text-lg font-bold text-teal-600">
            ${hotel.pricePerNight}
            <span className="text-sm text-gray-500">/night</span>
          </span>
        </div>
        <Rating value={hotel.rating} className="mb-2" />
        <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {getAmenityIcon(amenity)}
              {amenity && <span className="ml-1">{amenity}</span>}
            </span>
          ))}
        </div>
        
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onBookNow(hotel.id)}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};