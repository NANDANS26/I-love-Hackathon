import React from 'react';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { indianDestinations } from '../data/indianDestinations';

export const IndianDestinations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Discover India
          </h1>
          <p className="text-lg text-gray-600">
            Explore the rich culture and heritage of incredible India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indianDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};