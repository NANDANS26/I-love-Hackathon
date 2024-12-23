import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { BookingList } from '../bookings/BookingList';
import { BookingDetailsModal } from '../bookings/BookingDetails';
import { useBookings } from '../../context/BookingContext';
import { BookingType } from '../../types/booking';

interface BookingsSectionProps {
  userId: string;
}

const BOOKING_CATEGORIES = [
  { label: 'All', type: undefined },
  { label: 'Flights', type: 'flight' },
  { label: 'Hotels', type: 'hotel' },
  { label: 'Restaurants', type: 'restaurant' },
  { label: 'Destinations', type: 'destination' },
  { label: 'Transport', type: 'transport' }
] as const;

export const BookingsSection: React.FC<BookingsSectionProps> = ({ userId }) => {
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const { bookings, getUserBookings } = useBookings();
  const userBookings = getUserBookings(userId);

  const selectedBooking = userBookings.find(b => b.id === selectedBookingId);

  return (
    <div className="space-y-6">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1">
          {BOOKING_CATEGORIES.map((category) => (
            <Tab
              key={category.label}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                 ${
                   selected
                     ? 'bg-white text-teal-700 shadow'
                     : 'text-gray-600 hover:bg-white/[0.12] hover:text-teal-600'
                 }`
              }
            >
              {category.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {BOOKING_CATEGORIES.map((category) => (
            <Tab.Panel key={category.label}>
              <BookingList
                type={category.type}
                userId={userId}
                onViewDetails={setSelectedBookingId}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBookingId(null)}
        />
      )}
    </div>
  );
};