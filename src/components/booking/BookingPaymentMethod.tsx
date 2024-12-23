import React from 'react';
import { Wallet, CreditCard } from 'lucide-react';

interface BookingPaymentMethodProps {
  selected: 'token' | 'card';
  onSelect: (method: 'token' | 'card') => void;
}

export const BookingPaymentMethod: React.FC<BookingPaymentMethodProps> = ({
  selected,
  onSelect
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Payment Method
      </label>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className={`p-3 border rounded-lg flex items-center justify-center ${
            selected === 'token' ? 'border-teal-500 bg-teal-50' : ''
          }`}
          onClick={() => onSelect('token')}
        >
          <Wallet className="w-4 h-4 mr-2" />
          <span>TRV Tokens</span>
        </button>
        <button
          type="button"
          className={`p-3 border rounded-lg flex items-center justify-center ${
            selected === 'card' ? 'border-teal-500 bg-teal-50' : ''
          }`}
          onClick={() => onSelect('card')}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          <span>Card</span>
        </button>
      </div>
    </div>
  );
};