import React from 'react';
import { Card } from '../../ui/Card';
import { Wallet, TrendingUp } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../utils/currency';

interface WalletPreviewProps {
  balance: number;
  monthlyEarnings: number;
  pendingRewards: number;
}

export const WalletPreview: React.FC<WalletPreviewProps> = ({
  balance,
  monthlyEarnings,
  pendingRewards
}) => {
  const navigate = useNavigate();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Wallet Overview</h3>
        <Wallet className="w-6 h-6 text-teal-600" />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-600">Available Balance</p>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(balance)}</p>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
          <span>{formatCurrency(monthlyEarnings)} earned this month</span>
        </div>

        {pendingRewards > 0 && (
          <div className="bg-teal-50 p-3 rounded-lg">
            <p className="text-sm text-teal-700">
              You have {pendingRewards} pending rewards to claim!
            </p>
          </div>
        )}
      </div>

      <Button
        variant="primary"
        className="w-full"
        onClick={() => navigate('/wallet')}
      >
        Manage Wallet
      </Button>
    </Card>
  );
};