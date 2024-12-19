import React from 'react';
import { Card } from '../ui/Card';
import { Trophy, Target, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatDistance } from 'date-fns';

const mockTokenHistory = [
  { date: '2024-01', tokens: 100 },
  { date: '2024-02', tokens: 250 },
  { date: '2024-03', tokens: 400 },
  { date: '2024-04', tokens: 600 }
];

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  icon: React.ElementType;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Eco Explorer',
    description: 'Book 5 eco-certified stays',
    progress: 3,
    total: 5,
    icon: Trophy
  },
  {
    id: '2',
    title: 'Globe Trotter',
    description: 'Visit 10 different countries',
    progress: 7,
    total: 10,
    icon: Target
  },
  {
    id: '3',
    title: 'Sustainable Traveler',
    description: 'Complete 15 green journeys',
    progress: 12,
    total: 15,
    icon: Award
  }
];

export const LoyaltyDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Tokens</h3>
          <p className="text-3xl font-bold text-teal-600">1,250 TRV</p>
          <p className="text-sm text-gray-500 mt-2">
            Last earned {formatDistance(new Date('2024-03-15'), new Date(), { addSuffix: true })}
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Tier Status</h3>
          <p className="text-3xl font-bold text-purple-600">Gold</p>
          <p className="text-sm text-gray-500 mt-2">250 tokens until Platinum</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rewards Available</h3>
          <p className="text-3xl font-bold text-amber-600">5</p>
          <p className="text-sm text-gray-500 mt-2">View available rewards</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Token History</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockTokenHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tokens"
                stroke="#0d9488"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <achievement.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-teal-600">
                    {Math.round((achievement.progress / achievement.total) * 100)}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {achievement.progress}/{achievement.total}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-100">
                <div
                  style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};