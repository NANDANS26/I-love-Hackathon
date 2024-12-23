import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DestinationHero } from '../components/destinations/DestinationHero';
import { DestinationInfo } from '../components/destinations/DestinationInfo';
import { DestinationFeatures } from '../components/destinations/DestinationFeatures';
import { DestinationLocation } from '../components/destinations/DestinationLocation';
import { DestinationBookingModal } from '../components/booking/DestinationBookingModal';
import { popularDestinations } from '../data/destinations';

export const DestinationDetails: React.FC = () => {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  
  const destination = popularDestinations.find(d => d.id === id);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DestinationHero
              name={destination.name}
              image={destination.image}
              rating={destination.rating}
              ecoCertified={destination.ecoCertified}
              description={destination.description}
            />

            <DestinationInfo
              timings={destination.timings}
              bestTimeToVisit={destination.bestTimeToVisit}
              entryFee={destination.entryFee}
              nearestAirport={destination.location.nearestAirport}
            />

            <DestinationFeatures
              features={destination.features}
              nearbyAttractions={destination.nearbyAttractions}
            />
          </div>

          <div className="lg:col-span-1">
            <DestinationLocation
              name={destination.name}
              address={destination.location.address}
              coordinates={destination.location.coordinates}
              bestTimeToVisit={destination.bestTimeToVisit}
              onBookNow={() => setShowBooking(true)}
            />
          </div>
        </div>

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
      </div>
    </div>
  );
};