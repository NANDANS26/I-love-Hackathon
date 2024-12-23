import React, { useState } from 'react';
import { X, Users, Calendar, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useUser } from '../../context/UserContext';
import { useBookings } from '../../context/BookingContext';
import { formatCurrency } from '../../utils/currency';

interface DestinationBookingModalProps {
  destination: {
    id: string;
    name: string;
    image: string;
    entryFee: {
      indian: number;
      foreign: number;
    };
  };
  onClose: () => void;
}

export const DestinationBookingModal: React.FC<DestinationBookingModalProps> = ({
  destination,
  onClose
}) => {
  const { user } = useUser();
  const { addBooking } = useBookings();
  const [bookingData, setBookingData] = useState({
    visitDate: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    specialRequests: '',
    guideRequired: false,
    languagePreference: '',
  });

  const calculateTotal = () => {
    const adultFee = destination.entryFee.indian * bookingData.numberOfAdults;
    const childFee = (destination.entryFee.indian * 0.5) * bookingData.numberOfChildren;
    const guideFee = bookingData.guideRequired ? 500 : 0;
    return adultFee + childFee + guideFee;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const booking = {
      userId: user.email,
      destinationId: destination.id,
      bookingDate: new Date().toISOString(),
      visitDate: bookingData.visitDate,
      numberOfAdults: bookingData.numberOfAdults,
      numberOfChildren: bookingData.numberOfChildren,
      totalAmount: calculateTotal(),
      paymentStatus: 'pending' as const,
      bookingStatus: 'pending' as const,
      guideRequired: bookingData.guideRequired,
      languagePreference: bookingData.languagePreference,
      specialRequests: bookingData.specialRequests,
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
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Visit</h2>
              <p className="text-gray-600">{destination.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visit Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingData.visitDate}
                  onChange={(e) => setBookingData(prev => ({
                    ...prev,
                    visitDate: e.target.value
                  }))}
                  className="pl-10 w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Adults
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    required
                    value={bookingData.numberOfAdults}
                    onChange={(e) => setBookingData(prev => ({
                      ...prev,
                      numberOfAdults: parseInt(e.target.value)
                    }))}
                    className="pl-10 w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Children
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    min="0"
                    value={bookingData.numberOfChildren}
                    onChange={(e) => setBookingData(prev => ({
                      ...prev,
                      numberOfChildren: parseInt(e.target.value)
                    }))}
                    className="pl-10 w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData(prev => ({
                    ...prev,
                    specialRequests: e.target.value
                  }))}
                  className="pl-10 w-full p-2 border rounded-lg"
                  rows={3}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="guideRequired"
                checked={bookingData.guideRequired}
                onChange={(e) => setBookingData(prev => ({
                  ...prev,
                  guideRequired: e.target.checked
                }))}
                className="rounded border-gray-300"
              />
              <label htmlFor="guideRequired" className="text-sm text-gray-700">
                Request a Guide (+₹500)
              </label>
            </div>

            {bookingData.guideRequired && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    value={bookingData.languagePreference}
                    onChange={(e) => setBookingData(prev => ({
                      ...prev,
                      languagePreference: e.target.value
                    }))}
                    className="pl-10 w-full p-2 border rounded-lg"
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="local">Local Language</option>
                  </select>
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-semibold text-lg">
                  {formatCurrency(calculateTotal())}
                </span>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Confirm Booking
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};