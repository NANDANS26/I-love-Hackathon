import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletOverview } from '../components/wallet/sections/WalletOverview';
import { RewardsSection } from '../components/wallet/sections/RewardsSection';
import { TransactionHistory } from '../components/wallet/sections/TransactionHistory';
import { Button } from '../components/ui/Button';
import { User } from 'lucide-react';

export const Wallet: React.FC = () => {
  const navigate = useNavigate();

  const mockTransactions = [
    {
      id: '1',
      type: 'reward' as const,
      amount: 500,
      description: 'Booking Reward - Taj Mahal Tour',
      timestamp: new Date().toISOString(),
      status: 'completed' as const
    },
    {
      id: '2',
      type: 'payment' as const,
      amount: 1200,
      description: 'Hotel Booking - The Ritz-Carlton',
      timestamp: new Date().toISOString(),
      status: 'completed' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Wallet</h1>
          <Button
            variant="outline"
            onClick={() => navigate('/profile')}
            className="flex items-center space-x-2"
          >
            <User className="w-5 h-5" />
            <span>View Profile</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WalletOverview
              balance={25000}
              monthlyEarnings={3500}
              tier="Gold"
              nextTierAmount={5000}
            />
            <RewardsSection
              availableRewards={3}
              pendingRewards={2}
              onRedeemRewards={() => {}}
            />
          </div>

          <div className="lg:col-span-1">
            <TransactionHistory transactions={mockTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
};