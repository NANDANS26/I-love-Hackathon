import React from 'react';
import { Card } from '../ui/Card';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { WalletTransaction } from '../../types';

interface WalletCardProps {
  balance: number;
  address?: string;
  recentTransactions: WalletTransaction[];
}

export const WalletCard: React.FC<WalletCardProps> = ({
  balance,
  address,
  recentTransactions
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-teal-100 rounded-lg">
            <Wallet className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Your Wallet</h3>
            {address && (
              <p className="text-sm text-gray-500">
                {`${address.slice(0, 6)}...${address.slice(-4)}`}
              </p>
            )}
          </div>
        </div>
        {!address && (
          <Button variant="primary" size="sm">
            Connect Wallet
          </Button>
        )}
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600 mb-1">Available Balance</p>
        <p className="text-3xl font-bold text-gray-900">{balance.toFixed(2)} TRV</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-4">Recent Transactions</h4>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                {transaction.type === 'reward' ? (
                  <ArrowDownRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className={`text-sm font-medium ${
                transaction.type === 'reward' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'reward' ? '+' : '-'}
                {transaction.amount} TRV
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};