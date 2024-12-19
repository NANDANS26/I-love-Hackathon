import React, { useState } from 'react';
import { Calendar, Users, Car } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Vehicle } from '../../types';

interface BookingFormProps {
  destinationId: string;
  availableVehicles: Vehicle[];
  onSubmit: (booking: {
    startDate: string;
    endDate: string;
    guests: number;
    vehicleId?: string;
  }) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  destinationId,
  availableVehicles,
  onSubmit
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      startDate,
      endDate,
      guests,
      vehicleId: selectedVehicle
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Book Your Trip</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-out Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        {availableVehicles.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transportation
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedVehicle === vehicle.id
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-500'
                  }`}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-gray-900">{vehicle.name}</p>
                      <p className="text-sm text-gray-500">
                        {vehicle.seats} seats • ${vehicle.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button type="submit" variant="primary" className="w-full">
          Book Now with Tokens
        </Button>
      </form>
    </Card>
  );
};