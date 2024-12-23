import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { MapPin, Check } from 'lucide-react';
import { Restaurant } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { BookingModal } from '../booking/BookingModal';
import { formatCurrency } from '../../utils/currency';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  const handleViewDetails = () => {
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <ImageWithFallback
            src={restaurant.image}
            alt={restaurant.name}
            type="restaurant"
            className="w-full h-full"
          />
          {restaurant.verified && (
            <div className="absolute top-4 right-4 bg-teal-500 text-white p-2 rounded-full">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {restaurant.name}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <Rating value={restaurant.rating} />
            <span className="text-gray-600">{restaurant.priceRange}</span>
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{restaurant.location.address}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">{restaurant.cuisine}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {restaurant.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average cost</p>
              <p className="text-lg font-bold text-gray-900">
                {formatCurrency(restaurant.averageCost)}
                <span className="text-sm font-normal text-gray-500">/person</span>
              </p>
            </div>
            <div className="space-x-2">
              <Button variant="outline" onClick={handleViewDetails}>
                Details
              </Button>
              <Button variant="primary" onClick={() => setShowBooking(true)}>
                Book
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {showBooking && (
        <BookingModal
          title={`Book Table at ${restaurant.name}`}
          type="restaurant"
          itemDetails={{
            id: restaurant.id,
            name: restaurant.name,
            image: restaurant.image,
            price: restaurant.averageCost,
            type: 'restaurant',
            cuisine: restaurant.cuisine,
            location: restaurant.location.address
          }}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
};