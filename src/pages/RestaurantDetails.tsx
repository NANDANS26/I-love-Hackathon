import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { RestaurantDetails as RestaurantDetailsComponent } from '../components/restaurants/RestaurantDetails';
import { BookingModal } from '../components/booking/BookingModal';
import { restaurants } from '../data/restaurants';

export const RestaurantDetails: React.FC = () => {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return <Navigate to="/restaurants" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RestaurantDetailsComponent 
          restaurant={restaurant}
          onBookNow={() => setShowBooking(true)}
        />

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
      </div>
    </div>
  );
};