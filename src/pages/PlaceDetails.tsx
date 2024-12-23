import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DestinationBookingModal } from '../components/booking/DestinationBookingModal';
import { Button } from '../components/ui/Button';
import { countries } from '../data/countries';

export const PlaceDetails: React.FC = () => {
  const { countryId, placeId } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const country = countries.find(c => c.id === countryId);
  const place = country?.touristPlaces.find(p => p.id === placeId);

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Place not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{place.name}</h1>
            <p className="text-gray-600 mb-6">{place.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Location Details</h2>
                <p className="text-gray-600">{place.location.address}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Best Time to Visit</h2>
                <p className="text-gray-600">{place.bestTimeToVisit}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Things to See</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {place.thingsToSee.map((thing, index) => (
                    <li key={index}>{thing}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Activities</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {place.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Button 
              variant="primary" 
              onClick={() => setShowBooking(true)}
              className="w-full"
            >
              Book a Visit
            </Button>
          </div>
        </div>

        {showBooking && (
          <DestinationBookingModal
            destination={{
              id: place.id,
              name: place.name,
              image: place.image,
              entryFee: {
                indian: place.estimatedCost.min,
                foreign: place.estimatedCost.max
              }
            }}
            onClose={() => setShowBooking(false)}
          />
        )}
      </div>
    </div>
  );
};