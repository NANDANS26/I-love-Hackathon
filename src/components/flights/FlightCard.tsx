import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Plane, Clock, Users, Globe } from 'lucide-react';
import { Flight } from '../../types/transport';
import { BookingModal } from '../booking/BookingModal';
import { formatCurrency } from '../../utils/currency';

interface FlightCardProps {
  flight: Flight;
  onBook: (flightId: string) => void;
  isSelected?: boolean;
}

export const FlightCard: React.FC<FlightCardProps> = ({ 
  flight, 
  onBook,
  isSelected = false 
}) => {
  const [showBooking, setShowBooking] = useState(false);

  const isInternational = flight.type === 'international';

  return (
    <>
      <Card className={`p-4 ${isSelected ? 'ring-2 ring-teal-500' : ''}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${isInternational ? 'bg-purple-50' : 'bg-teal-50'}`}>
              {isInternational ? (
                <Globe className={`w-6 h-6 ${isInternational ? 'text-purple-600' : 'text-teal-600'}`} />
              ) : (
                <Plane className="w-6 h-6 text-teal-600" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
              <p className="text-sm text-gray-500">{flight.flightNumber}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-teal-600">
            {formatCurrency(flight.price)}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">{flight.departureTime}</p>
            <p className="text-sm text-gray-500">{flight.origin}</p>
          </div>
          <div className="flex-1 mx-4">
            <div className="border-t-2 border-gray-300 relative">
              <Plane className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-90 text-gray-400" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{flight.arrivalTime}</p>
            <p className="text-sm text-gray-500">{flight.destination}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{flight.availableSeats} seats left</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>{flight.class}</span>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-full"
          onClick={() => setShowBooking(true)}
        >
          Book Flight
        </Button>
      </Card>

      {showBooking && (
        <BookingModal
          title={`Book Flight - ${flight.airline} ${flight.flightNumber}`}
          type="flight"
          itemDetails={{
            id: flight.id,
            name: `${flight.airline} ${flight.flightNumber}`,
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
            price: flight.price,
            type: 'flight',
            airline: flight.airline,
            flightNumber: flight.flightNumber,
            origin: flight.origin,
            destination: flight.destination,
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            class: flight.class
          }}
          onClose={() => {
            setShowBooking(false);
            onBook(flight.id);
          }}
        />
      )}
    </>
  );
};