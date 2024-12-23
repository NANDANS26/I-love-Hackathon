import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { Leaf, MapPin, Wifi, Coffee, Dumbbell } from 'lucide-react';
import { Hotel } from '../../types';
import { formatCurrency } from '../../utils/currency';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { BookingModal } from '../booking/BookingModal';

interface HotelCardProps {
  hotel: Hotel;
  onBookNow?: (hotelId: string) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBookNow }) => {
  const [showBooking, setShowBooking] = useState(false);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      case 'gym':
        return <Dumbbell className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleBookNow = () => {
    setShowBooking(true);
    onBookNow?.(hotel.id);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <ImageWithFallback
            src={hotel.image}
            alt={hotel.name}
            type="hotel"
            className="w-full h-full"
          />
          {hotel.ecoCertified && (
            <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
              <Leaf className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {hotel.name}
          </h3>
          
          <div className="flex items-center space-x-2 mb-3">
            <Rating value={hotel.rating} />
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{hotel.location}</span>
          </div>

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

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-lg font-bold text-gray-900">
                {formatCurrency(hotel.pricePerNight)}
                <span className="text-sm font-normal text-gray-500">/night</span>
              </p>
            </div>
            <Button variant="primary" onClick={handleBookNow}>
              Book Now
            </Button>
          </div>
        </div>
      </Card>

      {showBooking && (
        <BookingModal
          title={`Book ${hotel.name}`}
          type="hotel"
          itemDetails={{
            id: hotel.id,
            name: hotel.name,
            image: hotel.image,
            price: hotel.pricePerNight,
            type: 'hotel',
            location: hotel.location
          }}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
};