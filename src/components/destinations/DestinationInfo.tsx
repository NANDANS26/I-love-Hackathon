import React from 'react';
import { Clock, Calendar, DollarSign, Plane } from 'lucide-react';
import { formatCurrency } from '../../utils/currency';

interface DestinationInfoProps {
  timings: string;
  bestTimeToVisit: string;
  entryFee: {
    foreign: number;
    currency: string;
  };
  nearestAirport: string;
}

export const DestinationInfo: React.FC<DestinationInfoProps> = ({
  timings,
  bestTimeToVisit,
  entryFee,
  nearestAirport
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Visit Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">{timings}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">{bestTimeToVisit}</span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">
            Entry: {formatCurrency(entryFee.foreign, entryFee.currency)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Plane className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">{nearestAirport}</span>
        </div>
      </div>
    </div>
  );
};