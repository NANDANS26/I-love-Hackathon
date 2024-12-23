import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { FavoriteButton } from '../favorites/FavoriteButton';
import { CompareButton } from '../compare/CompareButton';
import { DestinationBookingModal } from '../booking/DestinationBookingModal';
import { Button } from '../ui/Button';
import { Destination } from '../../types';
import { useFavorites } from '../../hooks/useFavorites';
import { ImageWithFallback } from '../common/ImageWithFallback';

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
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites('destinations');
  const [showBooking, setShowBooking] = useState(false);

  const handleViewDetails = () => {
    navigate(`/destination/${destination.id}`);
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBooking(true);
  };

  return (
    <>
      <Card 
        className="overflow-hidden h-full flex flex-col cursor-pointer"
        onClick={handleViewDetails}
      >
        <div className="relative h-48">
          <ImageWithFallback
            src={destination.image}
            alt={destination.name}
            type="destination"
            className="w-full h-full"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <FavoriteButton
              isFavorite={isFavorite(destination.id)}
              onToggle={(e) => {
                e.stopPropagation();
                toggleFavorite(destination.id);
              }}
            />
            {onCompareToggle && (
              <CompareButton
                isSelected={isInComparison}
                onToggle={(e) => {
                  e.stopPropagation();
                  onCompareToggle(destination.id);
                }}
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={handleViewDetails}
                className="w-full"
              >
                View Details
              </Button>
              <Button
                variant="primary"
                onClick={handleBookClick}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {showBooking && (
        <DestinationBookingModal
          destination={{
            id: destination.id,
            name: destination.name,
            image: destination.image,
            entryFee: destination.entryFee
          }}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
};