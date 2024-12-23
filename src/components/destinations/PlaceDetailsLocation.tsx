import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { MapView } from '../common/MapView';

interface PlaceDetailsLocationProps {
  address: string;
  bestTimeToVisit: string;
  estimatedCost: {
    currency: string;
    min: number;
    max: number;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const PlaceDetailsLocation: React.FC<PlaceDetailsLocationProps> = ({
  address,
  bestTimeToVisit,
  estimatedCost,
  coordinates
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Location Details</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{bestTimeToVisit}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-5 h-5 mr-2" />
            <span>
              {estimatedCost.currency} {estimatedCost.min}-
              {estimatedCost.max}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Map</h3>
        <MapView
          markers={[{
            position: [coordinates.lat, coordinates.lng],
            title: address,
            type: 'destination'
          }]}
          center={[coordinates.lat, coordinates.lng]}
          zoom={13}
          className="h-[200px] rounded-lg"
        />
      </div>
    </div>
  );
};