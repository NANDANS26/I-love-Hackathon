import React from 'react';
import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { BookingType, BookingItemDetails } from '../../types/booking';

interface BookingModalProps {
  title: string;
  type: BookingType;
  itemDetails: BookingItemDetails;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  title,
  type,
  itemDetails,
  onClose
}) => {
  if (!itemDetails?.image) {
    console.error('Missing required item details');
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-md bg-white relative rounded-xl shadow-lg">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            <BookingForm
              type={type}
              itemDetails={itemDetails}
              price={itemDetails.price}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};