import React from 'react';
import { Transport } from '../../types/transport';
import { Card } from '../ui/Card';
import { formatCurrency } from '../../utils/currency';

interface TransportStatsProps {
  transports: Transport[];
}

export const TransportStats: React.FC<TransportStatsProps> = ({ transports }) => {
  const getPriceRange = () => {
    if (!transports.length) return null;
    const prices = transports.map(t => t.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  const getAvailableRoutes = () => {
    return Array.from(new Set(transports.map(t => t.route)));
  };

  const priceRange = getPriceRange();
  const routes = getAvailableRoutes();

  return (
    <Card className="p-6 sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Available Options</h3>
          <p className="text-2xl font-bold text-gray-900">{transports.length}</p>
        </div>

        {priceRange && (
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Price Range</h3>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
            </p>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Popular Routes</h3>
          <div className="space-y-2">
            {routes.map((route) => (
              <div key={route} className="p-2 bg-gray-50 rounded-lg text-sm text-gray-700">
                {route}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};