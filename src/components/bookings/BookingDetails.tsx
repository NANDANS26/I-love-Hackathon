import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { 
  Plane, 
  Hotel, 
  Utensils, 
  MapPin, 
  Train,
  Calendar,
  Clock,
  Users,
  CreditCard,
  Award,
  X
} from 'lucide-react';
import { BookingDetails as BookingDetailsType } from '../../types/booking';
import { formatCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';
import { Button } from '../ui/Button';

interface BookingDetailsModalProps {
  booking: BookingDetailsType;
  onClose: () => void;
}

export const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  booking,
  onClose
}) => {
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
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-50 rounded-lg">
                {booking.type === 'flight' && <Plane className="w-6 h-6 text-teal-600" />}
                {booking.type === 'hotel' && <Hotel className="w-6 h-6 text-teal-600" />}
                {booking.type === 'restaurant' && <Utensils className="w-6 h-6 text-teal-600" />}
                {booking.type === 'destination' && <MapPin className="w-6 h-6 text-teal-600" />}
                {booking.type === 'transport' && <Train className="w-6 h-6 text-teal-600" />}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{booking.name}</h2>
                <p className="text-sm text-gray-500 capitalize">{booking.type} Booking</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Common Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="font-medium">{formatDate(booking.bookingDate)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="font-medium">{formatCurrency(booking.totalAmount)}</p>
                </div>
              </div>
            </div>

            {/* Type-specific Details */}
            {booking.flightDetails && (
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-medium text-gray-900">Flight Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Flight Number</p>
                    <p className="font-medium">{booking.flightDetails.flightNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Class</p>
                    <p className="font-medium">{booking.flightDetails.class}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">
                      {booking.flightDetails.origin} - {booking.flightDetails.departureTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-medium">
                      {booking.flightDetails.destination} - {booking.flightDetails.arrivalTime}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {booking.hotelDetails && (
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-medium text-gray-900">Stay Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Check-in</p>
                    <p className="font-medium">{formatDate(booking.hotelDetails.checkIn)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Check-out</p>
                    <p className="font-medium">{formatDate(booking.hotelDetails.checkOut)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Room Type</p>
                    <p className="font-medium">{booking.hotelDetails.roomType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-medium">{booking.hotelDetails.guests}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Rewards Section */}
            {booking.tokenRewards && (
              <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-teal-600">Rewards Earned</p>
                    <p className="font-medium text-teal-700">{booking.tokenRewards} TRV Tokens</p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              {booking.status === 'pending' && (
                <Button variant="primary">
                  Complete Booking
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};