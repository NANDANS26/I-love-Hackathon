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
  CreditCard
} from 'lucide-react';
import { BookingDetails } from '../../types/booking';
import { formatCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';

interface BookingCardProps {
  booking: BookingDetails;
  onViewDetails?: (bookingId: string) => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({ booking, onViewDetails }) => {
  const getIcon = () => {
    switch (booking.type) {
      case 'flight':
        return <Plane className="w-6 h-6" />;
      case 'hotel':
        return <Hotel className="w-6 h-6" />;
      case 'restaurant':
        return <Utensils className="w-6 h-6" />;
      case 'destination':
        return <MapPin className="w-6 h-6" />;
      case 'transport':
        return <Train className="w-6 h-6" />;
      default:
        return <MapPin className="w-6 h-6" />;
    }
  };

  const getStatusColor = () => {
    switch (booking.status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card 
        className="p-4 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => onViewDetails?.(booking.id)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-teal-50 rounded-lg">
              {getIcon()}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{booking.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{booking.type}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}>
            {booking.status}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(booking.visitDate)}</span>
          </div>

          {booking.flightDetails && (
            <div className="flex items-center justify-between text-sm">
              <span>{booking.flightDetails.origin}</span>
              <Plane className="w-4 h-4 mx-2" />
              <span>{booking.flightDetails.destination}</span>
            </div>
          )}

          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{booking.numberOfAdults + (booking.numberOfChildren || 0)} guests</span>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{formatDate(booking.bookingDate)}</span>
            </div>
            <div className="flex items-center text-sm font-medium">
              <CreditCard className="w-4 h-4 mr-1" />
              <span>{formatCurrency(booking.totalAmount)}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};