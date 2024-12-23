import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useUser } from '../../context/UserContext';
import { useBookings } from '../../context/BookingContext';
import { Flight } from '../../types/transport';
import { formatCurrency } from '../../utils/currency';

interface FlightBookingModalProps {
  flight: Flight;
  onClose: () => void;
}

export const FlightBookingModal: React.FC<FlightBookingModalProps> = ({
  flight,
  onClose
}) => {
  const { user } = useUser();
  const { addBooking } = useBookings();
  const [passengers, setPassengers] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const booking = {
      userId: user.email,
      type: 'flight' as const,
      name: `${flight.airline} ${flight.flightNumber}`,
      bookingDate: new Date().toISOString(),
      visitDate: new Date().toISOString(), // Flight date
      numberOfAdults: passengers,
      numberOfChildren: 0,
      totalAmount: flight.price * passengers,
      status: 'confirmed' as const,
      paymentStatus: 'completed' as const,
      paymentMethod: 'token' as const,
      specialRequests,
      tokenRewards: Math.floor((flight.price * passengers) * 0.1),
      flightDetails: {
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        origin: flight.origin,
        destination: flight.destination,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        class: flight.class
      }
    };

    addBooking(booking);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Book Flight</h2>
          <div className="mb-4">
            <p className="text-gray-600">{flight.airline} - {flight.flightNumber}</p>
            <p className="text-gray-600">{flight.origin} → {flight.destination}</p>
            <p className="text-gray-600">{flight.departureTime} - {flight.arrivalTime}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Passengers</label>
              <input
                type="number"
                min="1"
                max={flight.availableSeats}
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Special Requests</label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span>Total Amount</span>
                <span className="font-semibold">{formatCurrency(flight.price * passengers)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Token Rewards</span>
                <span className="text-teal-600">{Math.floor((flight.price * passengers) * 0.1)} TRV</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="primary">Confirm Booking</Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};