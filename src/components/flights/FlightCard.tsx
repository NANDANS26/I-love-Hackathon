import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Plane, Clock } from 'lucide-react';
import { Flight } from '../../types/transport';
import { BookingModal } from '../booking/BookingModal';

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

  const handleBooking = (bookingDetails: any) => {
    onBook(flight.id);
    setShowBooking(false);
    // Handle booking confirmation
    console.log('Booking details:', bookingDetails);
  };

  return (
    <>
      <Card className={`p-4 ${isSelected ? 'ring-2 ring-teal-500' : ''}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Plane className="w-6 h-6 text-teal-600" />
            <div>
              <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
              <p className="text-sm text-gray-500">{flight.flightNumber}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-teal-600">${flight.price}</span>
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
          <div className="text-sm text-gray-600">
            Class: {flight.class}
          </div>
          <div className="text-sm text-gray-600">
            {flight.availableSeats} seats left
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
          price={flight.price}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBooking}
        />
      )}
    </>
  );
};