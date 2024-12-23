import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { MapView } from '../common/MapView';
import { Button } from '../ui/Button';

interface DestinationLocationProps {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bestTimeToVisit: string;
  onBookNow: () => void;
}

export const DestinationLocation: React.FC<DestinationLocationProps> = ({
  name,
  address,
  coordinates,
  bestTimeToVisit,
  onBookNow
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      <MapView
        markers={[{
          position: [coordinates.lat, coordinates.lng],
          title: name,
          type: 'destination'
        }]}
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        className="h-[200px] rounded-lg mb-6"
      />

      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Info className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Best Time: {bestTimeToVisit}</span>
        </div>
      </div>

      <Button
        variant="primary"
        className="w-full"
        onClick={onBookNow}
      >
        Book Now
      </Button>
    </div>
  );
};