import React from 'react';
import { BookingCard } from './BookingCard';
import { useBookings } from '../../context/BookingContext';
import { BookingType } from '../../types/booking';

interface BookingListProps {
  type?: BookingType;
  userId?: string;
  onViewDetails?: (bookingId: string) => void;
}

export const BookingList: React.FC<BookingListProps> = ({ 
  type,
  userId,
  onViewDetails 
}) => {
  const { bookings, getBookingsByType, getUserBookings } = useBookings();

  const filteredBookings = React.useMemo(() => {
    if (userId) {
      const userBookings = getUserBookings(userId);
      return type ? userBookings.filter(b => b.type === type) : userBookings;
    }
    return type ? getBookingsByType(type) : bookings;
  }, [bookings, type, userId, getBookingsByType, getUserBookings]);

  if (filteredBookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No bookings found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};