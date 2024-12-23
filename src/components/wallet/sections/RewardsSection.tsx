import React from 'react';
import { Card } from '../../ui/Card';
import { Gift, Star, Ticket } from 'lucide-react';

interface RewardsSectionProps {
  availableRewards: number;
  pendingRewards: number;
  onRedeemRewards: () => void;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({
  availableRewards,
  pendingRewards,
  onRedeemRewards
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Travel Rewards</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-5 h-5 text-teal-600" />
            <span className="text-lg font-bold text-teal-600">{availableRewards}</span>
          </div>
          <p className="text-sm text-teal-600">Available Rewards</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Gift className="w-5 h-5 text-purple-600" />
            <span className="text-lg font-bold text-purple-600">{pendingRewards}</span>
          </div>
          <p className="text-sm text-purple-600">Pending Rewards</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Ticket className="w-5 h-5 text-gray-500 mr-2" />
            <div>
              <p className="font-medium">Free Hotel Upgrade</p>
              <p className="text-sm text-gray-500">Valid for next booking</p>
            </div>
          </div>
          <button className="text-teal-600 text-sm font-medium">Redeem</button>
        </div>
      </div>
    </Card>
  );
};