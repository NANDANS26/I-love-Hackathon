import React, { useState } from 'react';
import { X, Calendar, Users, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface BookingModalProps {
  title: string;
  price: number;
  onClose: () => void;
  onConfirm: (bookingDetails: {
    startDate: string;
    endDate: string;
    guests: number;
    paymentMethod: 'token' | 'card';
  }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  title,
  price,
  onClose,
  onConfirm
}) => {
  const [bookingDetails, setBookingDetails] = useState({
    startDate: '',
    endDate: '',
    guests: 1,
    paymentMethod: 'token' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(bookingDetails);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white relative">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    required
                    className="pl-10 w-full p-3 border rounded-lg"
                    value={bookingDetails.startDate}
                    onChange={(e) => setBookingDetails(prev => ({
                      ...prev,
                      startDate: e.target.value
                    }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    required
                    className="pl-10 w-full p-3 border rounded-lg"
                    value={bookingDetails.endDate}
                    onChange={(e) => setBookingDetails(prev => ({
                      ...prev,
                      endDate: e.target.value
                    }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    required
                    className="pl-10 w-full p-3 border rounded-lg"
                    value={bookingDetails.guests}
                    onChange={(e) => setBookingDetails(prev => ({
                      ...prev,
                      guests: parseInt(e.target.value)
                    }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`p-3 border rounded-lg flex items-center justify-center ${
                      bookingDetails.paymentMethod === 'token' ? 'border-teal-500 bg-teal-50' : ''
                    }`}
                    onClick={() => setBookingDetails(prev => ({
                      ...prev,
                      paymentMethod: 'token'
                    }))}
                  >
                    <span className="mr-2">TRV Tokens</span>
                  </button>
                  <button
                    type="button"
                    className={`p-3 border rounded-lg flex items-center justify-center ${
                      bookingDetails.paymentMethod === 'card' ? 'border-teal-500 bg-teal-50' : ''
                    }`}
                    onClick={() => setBookingDetails(prev => ({
                      ...prev,
                      paymentMethod: 'card'
                    }))}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    <span>Card</span>
                  </button>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-4">
                  <span>Total Price</span>
                  <span className="font-semibold">${price}</span>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Confirm Booking
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}; 