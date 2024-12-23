import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { 
  MapPin, 
  Globe, 
  Calendar,
  Award,
  TrendingUp,
  Star
} from 'lucide-react';

interface ProfileStatsProps {
  stats: {
    placesVisited: number;
    countriesVisited: number;
    totalTrips: number;
    upcomingTrips: number;
    reviewsCount: number;
    memberSince: string;
    rewardPoints: number;
    travelRank: string;
  };
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100">
          <div className="flex items-center justify-between mb-4">
            <Globe className="w-8 h-8 text-teal-600" />
            <div className="text-right">
              <p className="text-3xl font-bold text-teal-700">{stats.countriesVisited}</p>
              <p className="text-sm text-teal-600">Countries</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <MapPin className="w-6 h-6 text-teal-500" />
            <p className="text-2xl font-bold text-teal-700">{stats.placesVisited}</p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-purple-600" />
            <div className="text-right">
              <p className="text-lg font-bold text-purple-700">{stats.travelRank}</p>
              <p className="text-sm text-purple-600">Travel Rank</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Star className="w-6 h-6 text-purple-500" />
            <p className="text-2xl font-bold text-purple-700">{stats.rewardPoints}</p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-700">{stats.totalTrips}</p>
              <p className="text-sm text-blue-600">Total Trips</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <p className="text-lg font-bold text-blue-700">{stats.upcomingTrips} Upcoming</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};