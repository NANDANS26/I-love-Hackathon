import React from 'react';
import { Check, MapPin } from 'lucide-react';

interface DestinationFeaturesProps {
  features: string[];
  nearbyAttractions: string[];
}

export const DestinationFeatures: React.FC<DestinationFeaturesProps> = ({
  features,
  nearbyAttractions
}) => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Nearby Attractions</h2>
        <ul className="space-y-2">
          {nearbyAttractions.map((attraction, index) => (
            <li key={index} className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-teal-500" />
              <span>{attraction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};