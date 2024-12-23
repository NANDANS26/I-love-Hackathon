import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { 
  Calendar,
  Users,
  Clock,
  MessageSquare,
  Globe,
  CreditCard,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { BookingDetails as BookingDetailsType } from '../../types/booking';
import { formatCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';

interface BookingDetailsProps {
  booking: BookingDetailsType;
  onClose: () => void;
}

export const BookingDetails: React.FC<BookingDetailsProps> = ({
  booking,
  onClose
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
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
              <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
              <p className="text-gray-600">Booking ID: {booking.id}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Visit Date</p>
                  <p className="font-medium">{formatDate(booking.visitDate)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Visitors</p>
                  <p className="font-medium">
                    {booking.numberOfAdults} Adults, {booking.numberOfChildren} Children
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="font-medium text-gray-900">Booking Status</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg ${getStatusColor(booking.bookingStatus)}`}>
                  <p className="text-sm">Booking Status</p>
                  <p className="font-medium capitalize">{booking.bookingStatus}</p>
                </div>
                <div className={`p-3 rounded-lg ${getStatusColor(booking.paymentStatus)}`}>
                  <p className="text-sm">Payment Status</p>
                  <p className="font-medium capitalize">{booking.paymentStatus}</p>
                </div>
              </div>
            </div>

            {booking.specialRequests && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Special Requests</h3>
                <p className="text-gray-600">{booking.specialRequests}</p>
              </div>
            )}

            {booking.guideRequired && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h3 className="font-medium text-gray-900">Guide Service</h3>
                </div>
                <p className="text-gray-600">
                  Language: {booking.languagePreference || 'Not specified'}
                </p>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(booking.totalAmount)}
                  </p>
                </div>
                {booking.paymentMethod && (
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600 capitalize">
                      {booking.paymentMethod}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};