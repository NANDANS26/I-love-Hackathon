import React from 'react';
import { Calendar, Users, MessageSquare } from 'lucide-react';
import type { BookingDetails, BookingType } from '../../types/booking';

interface BookingFormFieldsProps {
  type: BookingType;
  bookingDetails: Partial<BookingDetails>;
  onChange: (details: Partial<BookingDetails>) => void;
}

export const BookingFormFields: React.FC<BookingFormFieldsProps> = ({
  type,
  bookingDetails,
  onChange
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {type === 'restaurant' ? 'Date & Time' : 'Check-in Date'}
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={type === 'restaurant' ? 'datetime-local' : 'date'}
            required
            value={bookingDetails.startDate || ''}
            onChange={(e) => onChange({
              ...bookingDetails,
              startDate: e.target.value
            })}
            className="pl-10 w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      {type !== 'restaurant' && type !== 'flight' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              required
              value={bookingDetails.endDate || ''}
              onChange={(e) => onChange({
                ...bookingDetails,
                endDate: e.target.value
              })}
              className="pl-10 w-full p-2 border rounded-lg"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of {type === 'flight' ? 'Passengers' : 'Guests'}
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            min="1"
            required
            value={bookingDetails.numberOfAdults || 1}
            onChange={(e) => onChange({
              ...bookingDetails,
              numberOfAdults: parseInt(e.target.value)
            })}
            className="pl-10 w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Requests
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400" />
          <textarea
            value={bookingDetails.specialRequests || ''}
            onChange={(e) => onChange({
              ...bookingDetails,
              specialRequests: e.target.value
            })}
            className="pl-10 w-full p-2 border rounded-lg"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};