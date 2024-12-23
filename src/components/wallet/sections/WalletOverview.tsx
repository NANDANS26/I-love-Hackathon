import React from 'react';
import { Card } from '../../ui/Card';
import { Wallet, TrendingUp, Award } from 'lucide-react';
import { formatCurrency } from '../../../utils/currency';

interface WalletOverviewProps {
  balance: number;
  monthlyEarnings: number;
  tier: string;
  nextTierAmount: number;
}

export const WalletOverview: React.FC<WalletOverviewProps> = ({
  balance,
  monthlyEarnings,
  tier,
  nextTierAmount
}) => {
  return (
    <Card className="bg-gradient-to-br from-teal-500 to-blue-500 p-6">
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-1">Total Balance</h2>
          <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
          <div className="flex items-center mt-2 text-white/90">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>{formatCurrency(monthlyEarnings)} earned this month</span>
          </div>
        </div>
        <Wallet className="w-12 h-12 text-white/80" />
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-white/90 text-sm mb-2">
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-1" />
            <span>{tier} Member</span>
          </div>
          <span>{formatCurrency(nextTierAmount)} until next tier</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2" style={{ width: '75%' }} />
        </div>
      </div>
    </Card>
  );
};