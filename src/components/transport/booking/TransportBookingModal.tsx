import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { X, Calendar, Users, Clock, MapPin, CreditCard } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Transport } from '../../../types/transport';
import { useBookings } from '../../../context/BookingContext';
import { useUser } from '../../../context/UserContext';
import { formatCurrency } from '../../../utils/currency';

interface TransportBookingModalProps {
  transport: Transport;
  onClose: () => void;
}

export const TransportBookingModal: React.FC<TransportBookingModalProps> = ({
  transport,
  onClose
}) => {
  const { user } = useUser();
  const { addBooking } = useBookings();
  const [formData, setFormData] = useState({
    travelDate: '',
    passengers: 1,
    specialRequests: '',
    insuranceRequired: false,
    emergencyContact: '',
    paymentMethod: 'token' as 'token' | 'card',
    luggageDetails: '',
    pickupLocation: '',
    dropLocation: ''
  });

  const calculateTotal = () => {
    let total = transport.price * formData.passengers;
    if (formData.insuranceRequired) {
      total += 200 * formData.passengers; // Insurance fee per passenger
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const booking = {
      id: `booking-${Date.now()}`,
      userId: user.email,
      type: 'transport' as const,
      name: transport.name,
      bookingDate: new Date().toISOString(),
      visitDate: formData.travelDate,
      numberOfAdults: formData.passengers,
      numberOfChildren: 0,
      totalAmount: calculateTotal(),
      status: 'confirmed' as const,
      paymentStatus: 'completed' as const,
      paymentMethod: formData.paymentMethod,
      specialRequests: formData.specialRequests,
      tokenRewards: Math.floor(calculateTotal() * 0.1),
      transportDetails: {
        type: transport.type,
        route: transport.route,
        departureTime: transport.departureTime,
        arrivalTime: transport.arrivalTime,
        class: transport.class,
        pickupLocation: formData.pickupLocation,
        dropLocation: formData.dropLocation,
        insuranceIncluded: formData.insuranceRequired,
        emergencyContact: formData.emergencyContact,
        luggageDetails: formData.luggageDetails
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
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book {transport.type === 'train' ? 'Train' : 'Cab'}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.travelDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                    className="pl-10 w-full p-2.5 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    required
                    min="1"
                    max={transport.type === 'train' ? '6' : '4'}
                    value={formData.passengers}
                    onChange={(e) => setFormData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
                    className="pl-10 w-full p-2.5 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, pickupLocation: e.target.value }))}
                    className="pl-10 w-full p-2.5 border rounded-lg"
                    placeholder="Enter pickup location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Drop Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.dropLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, dropLocation: e.target.value }))}
                    className="pl-10 w-full p-2.5 border rounded-lg"
                    placeholder="Enter drop location"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Luggage Details</label>
              <textarea
                value={formData.luggageDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, luggageDetails: e.target.value }))}
                className="w-full p-2.5 border rounded-lg"
                rows={2}
                placeholder="Enter number of bags and approximate weight"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
              <input
                type="tel"
                value={formData.emergencyContact}
                onChange={(e) => setFormData(prev => ({ ...prev, emergencyContact: e.target.value }))}
                className="w-full p-2.5 border rounded-lg"
                placeholder="Emergency contact number"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="insuranceRequired"
                checked={formData.insuranceRequired}
                onChange={(e) => setFormData(prev => ({ ...prev, insuranceRequired: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <label htmlFor="insuranceRequired" className="text-sm text-gray-700">
                Add Travel Insurance (+₹200 per passenger)
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'token' }))}
                  className={`p-3 border rounded-lg flex items-center justify-center ${
                    formData.paymentMethod === 'token' ? 'border-teal-500 bg-teal-50' : ''
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span>TRV Tokens</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                  className={`p-3 border rounded-lg flex items-center justify-center ${
                    formData.paymentMethod === 'card' ? 'border-teal-500 bg-teal-50' : ''
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span>Card</span>
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(calculateTotal())}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Rewards</p>
                  <p className="text-lg font-semibold text-teal-600">
                    +{Math.floor(calculateTotal() * 0.1)} TRV
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="primary">Confirm Booking</Button>
              </div>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};