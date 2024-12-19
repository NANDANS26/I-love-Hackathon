import React from 'react';
import { Clock, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useRecentlyViewed } from '../../hooks/useRecentlyViewed';
import { popularDestinations } from '../../data/destinations';
import { restaurants } from '../../data/restaurants';
import { formatDistanceToNow } from 'date-fns';

export const RecentlyViewedSection: React.FC = () => {
  const { recentItems, clearRecentlyViewed } = useRecentlyViewed();

  const getItemDetails = (id: string, type: string) => {
    switch (type) {
      case 'destination':
        return popularDestinations.find((d) => d.id === id);
      case 'restaurant':
        return restaurants.find((r) => r.id === id);
      default:
        return null;
    }
  };

  if (recentItems.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <h2 className="text-xl font-semibold text-gray-900">Recently Viewed</h2>
        </div>
        <button
          onClick={clearRecentlyViewed}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recentItems.map((item, index) => {
          const details = getItemDetails(item.id, item.type);
          if (!details) return null;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={details.image}
                  alt={details.name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm text-gray-900 truncate">
                    {details.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};