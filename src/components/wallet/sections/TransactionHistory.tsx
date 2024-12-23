import React from 'react';
import { Card } from '../../ui/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatCurrency } from '../../../utils/currency';
import { formatDate } from '../../../utils/date';

interface Transaction {
  id: string;
  type: 'reward' | 'payment';
  amount: number;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {transaction.type === 'reward' ? (
                <ArrowDownRight className="w-5 h-5 text-green-500" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-red-500" />
              )}
              <div>
                <p className="font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-500">{formatDate(transaction.timestamp)}</p>
              </div>
            </div>
            <p className={`font-medium ${
              transaction.type === 'reward' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'reward' ? '+' : '-'}
              {formatCurrency(transaction.amount)}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};