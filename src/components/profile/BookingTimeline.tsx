import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { formatDate } from '../../utils/date';
import { BookingDetails } from '../../types/booking';

interface BookingTimelineProps {
  bookings: BookingDetails[];
}

export const BookingTimeline: React.FC<BookingTimelineProps> = ({ bookings }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Booking Timeline</h3>
      <div className="space-y-8">
        {bookings.map((booking, index) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500" />
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{booking.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(booking.visitDate)}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {booking.numberOfAdults + (booking.numberOfChildren || 0)} Guests
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {booking.location || 'Location'}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Booked {formatDate(booking.bookingDate)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};