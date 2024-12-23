import React, { createContext, useContext, useState, useCallback } from 'react';
import { BookingDetails, BookingType } from '../types/booking';

interface BookingContextType {
  bookings: BookingDetails[];
  addBooking: (booking: BookingDetails) => void;
  updateBookingStatus: (bookingId: string, status: BookingDetails['status']) => void;
  getBookingsByType: (type: BookingType) => BookingDetails[];
  getUserBookings: (userId: string) => BookingDetails[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingDetails[]>(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const addBooking = useCallback((booking: BookingDetails) => {
    setBookings(prev => {
      const newBookings = [...prev, {
        ...booking,
        id: `booking-${Date.now()}`,
        bookingDate: new Date().toISOString(),
        status: 'confirmed',
        paymentStatus: 'completed',
        tokenRewards: Math.floor(booking.totalAmount * 0.1)
      }];
      localStorage.setItem('bookings', JSON.stringify(newBookings));
      return newBookings;
    });
  }, []);

  const updateBookingStatus = useCallback((bookingId: string, status: BookingDetails['status']) => {
    setBookings(prev => {
      const newBookings = prev.map(booking =>
        booking.id === bookingId ? { ...booking, status } : booking
      );
      localStorage.setItem('bookings', JSON.stringify(newBookings));
      return newBookings;
    });
  }, []);

  const getBookingsByType = useCallback((type: BookingType) => {
    return bookings.filter(booking => booking.type === type);
  }, [bookings]);

  const getUserBookings = useCallback((userId: string) => {
    return bookings.filter(booking => booking.userId === userId);
  }, [bookings]);

  return (
    <BookingContext.Provider value={{
      bookings,
      addBooking,
      updateBookingStatus,
      getBookingsByType,
      getUserBookings
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
};