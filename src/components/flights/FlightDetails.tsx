import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Plane, Clock, Users } from 'lucide-react';
import { Flight } from '../../types/transport';
import { FlightBookingModal } from './FlightBookingModal';
import { formatCurrency } from '../../utils/currency';

interface FlightDetailsProps extends Flight {
  onClick: () => void;
}

export const FlightDetails: React.FC<FlightDetailsProps> = (props) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Plane className="w-6 h-6 text-teal-600" />
            <div>
              <h3 className="font-semibold text-gray-900">{props.airline}</h3>
              <p className="text-sm text-gray-500">{props.flightNumber}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-teal-600">
            {formatCurrency(props.price)}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">{props.departureTime}</p>
            <p className="text-sm text-gray-500">{props.origin}</p>
          </div>
          <div className="flex-1 mx-4">
            <div className="border-t-2 border-gray-300 relative">
              <Plane className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-90 text-gray-400" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{props.arrivalTime}</p>
            <p className="text-sm text-gray-500">{props.destination}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{props.availableSeats} seats left</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>{props.class}</span>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-full"
          onClick={() => setShowBooking(true)}
        >
          Book Now
        </Button>
      </Card>

      {showBooking && (
        <FlightBookingModal
          flight={props}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
};