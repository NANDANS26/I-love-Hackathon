import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { FavoriteButton } from '../favorites/FavoriteButton';
import { CompareButton } from '../compare/CompareButton';
import { BookingModal } from '../booking/BookingModal';
import { Button } from '../ui/Button';
import { Destination } from '../../types';
import { useFavorites } from '../../hooks/useFavorites';

interface DestinationCardProps {
  destination: Destination;
  onCompareToggle?: (id: string) => void;
  isInComparison?: boolean;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onCompareToggle,
  isInComparison = false
}) => {
  const { isFavorite, toggleFavorite } = useFavorites('destinations');
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (bookingDetails: any) => {
    console.log('Booking details:', bookingDetails);
    setShowBooking(false);
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBooking(true);
  };

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <FavoriteButton
              isFavorite={isFavorite(destination.id)}
              onToggle={() => toggleFavorite(destination.id)}
            />
            {onCompareToggle && (
              <CompareButton
                isSelected={isInComparison}
                onToggle={() => onCompareToggle(destination.id)}
              />
            )}
          </div>
          {destination.ecoCertified && (
            <div className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full">
              <Leaf className="w-4 h-4" />
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {destination.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 flex-grow">
            {destination.description}
          </p>
          <div className="mt-auto">
            <Rating value={destination.rating} className="mb-3" />
            <Button
              variant="primary"
              className="w-full"
              onClick={handleBookClick}
            >
              Book Now
            </Button>
          </div>
        </div>
      </Card>

      {showBooking && (
        <BookingModal
          title={`Book Trip to ${destination.name}`}
          price={destination.entryFee?.foreign || 100}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBooking}
        />
      )}
    </>
  );
};