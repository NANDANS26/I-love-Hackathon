import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Train, Car, Clock, Users } from 'lucide-react';
import { Transport } from '../../types/transport';
import { TransportBookingModal } from './booking/TransportBookingModal';
import { formatCurrency } from '../../utils/currency';

interface TransportCardProps {
  transport: Transport;
}

export const TransportCard: React.FC<TransportCardProps> = ({ transport }) => {
  const [showBooking, setShowBooking] = useState(false);
  const Icon = transport.type === 'train' ? Train : Car;

  return (
    <>
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${transport.type === 'train' ? 'bg-blue-50' : 'bg-green-50'}`}>
              <Icon className={`w-6 h-6 ${transport.type === 'train' ? 'text-blue-600' : 'text-green-600'}`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{transport.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{transport.type}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-teal-600">
            {formatCurrency(transport.price)}
          </span>
        </div>

        {transport.type === 'train' && (
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <p className="text-xl font-bold">{transport.departureTime}</p>
              <p className="text-sm text-gray-500">Departure</p>
            </div>
            <div className="flex-1 mx-4">
              <div className="border-t-2 border-gray-300 relative">
                <Train className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-gray-400" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{transport.arrivalTime}</p>
              <p className="text-sm text-gray-500">Arrival</p>
            </div>
          </div>
        )}

        {transport.type === 'cab' && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">{transport.route}</p>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {transport.seatingCapacity} seats
              </span>
            </div>
          </div>
        )}

        <Button
          variant="primary"
          className="w-full"
          onClick={() => setShowBooking(true)}
        >
          Book {transport.type === 'train' ? 'Train' : 'Cab'}
        </Button>
      </Card>

      {showBooking && (
        <TransportBookingModal
          transport={transport}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
};