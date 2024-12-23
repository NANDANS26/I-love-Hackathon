import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../utils/currency';
import { BookingCostBreakdown } from './BookingCostBreakdown';
import { BookingFormFields } from './BookingFormFields';
import { useUser } from '../../context/UserContext';
import { useBookings } from '../../context/BookingContext';
import type { BookingFormProps, BookingDetails } from '../../types/booking';

export const BookingForm: React.FC<BookingFormProps> = ({
  type,
  itemDetails,
  price,
  onClose
}) => {
  const { user } = useUser();
  const { addBooking } = useBookings();
  const [bookingDetails, setBookingDetails] = useState<Partial<BookingDetails>>({
    startDate: '',
    endDate: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    paymentMethod: 'token',
    specialRequests: '',
    activities: [],
    guideRequired: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const booking: BookingDetails = {
      id: '', // Will be set by BookingContext
      userId: user.email,
      type,
      name: itemDetails.name,
      bookingDate: new Date().toISOString(),
      visitDate: bookingDetails.startDate || new Date().toISOString(),
      numberOfAdults: bookingDetails.numberOfAdults || 1,
      numberOfChildren: bookingDetails.numberOfChildren || 0,
      totalAmount: price,
      status: 'pending',
      paymentStatus: 'pending',
      paymentMethod: bookingDetails.paymentMethod || 'token',
      specialRequests: bookingDetails.specialRequests,
      tokenRewards: 0, // Will be calculated by BookingContext
    };

    // Add type-specific details
    if (type === 'flight') {
      booking.flightDetails = {
        airline: itemDetails.airline,
        flightNumber: itemDetails.flightNumber,
        origin: itemDetails.origin,
        destination: itemDetails.destination,
        departureTime: itemDetails.departureTime,
        arrivalTime: itemDetails.arrivalTime,
        class: itemDetails.class
      };
    } else if (type === 'transport') {
      booking.transportDetails = {
        type: itemDetails.type,
        route: itemDetails.route,
        departureTime: itemDetails.departureTime,
        arrivalTime: itemDetails.arrivalTime,
        class: itemDetails.class,
        vehicleType: itemDetails.vehicleType
      };
    }

    addBooking(booking);
    onClose();
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <BookingFormFields
          type={type}
          bookingDetails={bookingDetails}
          onChange={setBookingDetails}
        />
        
        <BookingCostBreakdown
          price={price}
          bookingDetails={bookingDetails}
        />

        <Button type="submit" variant="primary" className="w-full">
          Confirm Booking
        </Button>
      </form>
    </Card>
  );
};