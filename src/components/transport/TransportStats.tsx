import React from 'react';
import { Transport } from '../../types/transport';

interface TransportStatsProps {
  transports: Transport[];
}

export const TransportStats: React.FC<TransportStatsProps> = ({ transports }) => {
  const getPriceRange = () => {
    if (!transports.length) return null;
    const prices = transports.map(t => t.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  const priceRange = getPriceRange();

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Transport Options</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Available Types</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                Train
              </span>
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                Cab
              </span>
            </div>
          </div>
          {priceRange && (
            <div>
              <p className="text-sm text-gray-600">Price Range</p>
              <p className="text-2xl font-bold text-gray-900">
                ${priceRange.min} - ${priceRange.max}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};