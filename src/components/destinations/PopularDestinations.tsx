import React from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from './DestinationCard';
import { popularDestinations } from '../../data/destinations';

export const PopularDestinations: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover blockchain-verified experiences at these amazing locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: parseInt(destination.id) * 0.1 }}
              className="h-full"
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};