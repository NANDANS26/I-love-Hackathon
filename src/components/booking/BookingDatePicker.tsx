import React from 'react';
import { Calendar } from 'lucide-react';
import { BookingType } from '../../types/booking';

interface BookingDatePickerProps {
  type: BookingType;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export const BookingDatePicker: React.FC<BookingDatePickerProps> = ({
  type,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {type === 'restaurant' ? 'Date & Time' : 'Check-in Date'}
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={type === 'restaurant' ? 'datetime-local' : 'date'}
            required
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
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
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="pl-10 w-full p-2 border rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};