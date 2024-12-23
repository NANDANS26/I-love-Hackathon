import React, { useState } from 'react';
import { Train, Clock, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { BookingModal } from '../booking/BookingModal';
import { Transport } from '../../types/transport';
import { formatCurrency } from '../../utils/currency';

interface TrainCardProps {
  transport: Transport;
  onBook: (id: string) => void;
}

export const TrainCard: React.FC<TrainCardProps> = ({ transport, onBook }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Train className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{transport.name}</h3>
            <p className="text-sm text-gray-500">{transport.class}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-blue-600">
          {formatCurrency(transport.price)}
        </span>
      </div>

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

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span>{transport.availableSeats} seats left</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span>{transport.route}</span>
        </div>
      </div>

      <Button
        variant="primary"
        className="w-full"
        onClick={() => setShowBooking(true)}
      >
        Book Train
      </Button>

      {showBooking && (
        <BookingModal
          title={`Book Train - ${transport.name}`}
          type="transport"
          itemDetails={{
            id: transport.id,
            name: transport.name,
            image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
            price: transport.price,
            type: 'transport',
            route: transport.route,
            departureTime: transport.departureTime,
            arrivalTime: transport.arrivalTime,
            class: transport.class
          }}
          onClose={() => {
            setShowBooking(false);
            onBook(transport.id);
          }}
        />
      )}
    </Card>
  );
};