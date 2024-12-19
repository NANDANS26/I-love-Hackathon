import React from 'react';
import { WalletCard } from '../components/wallet/WalletCard';

const mockTransactions = [
  {
    id: '1',
    type: 'reward' as const,
    amount: 100,
    timestamp: '2024-03-15T10:00:00Z',
    description: 'Booking Reward',
    status: 'completed' as const
  },
  {
    id: '2',
    type: 'payment' as const,
    amount: 50,
    timestamp: '2024-03-14T15:30:00Z',
    description: 'Hotel Booking',
    status: 'completed' as const
  }
];

export const Wallet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Wallet Dashboard</h1>
        <WalletCard
          balance={1250}
          recentTransactions={mockTransactions}
        />
      </div>
    </div>
  );
};