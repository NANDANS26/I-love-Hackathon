import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Compass, Palmtree, ArrowRight } from 'lucide-react';
import { HeroFeature } from './HeroFeature';
import { Button } from '../ui/Button';

const features = [
  {
    icon: Plane,
    title: 'Travel Anywhere',
    description: 'Explore destinations worldwide with verified accommodations'
  },
  {
    icon: Map,
    title: 'Smart Routes',
    description: 'AI-powered travel planning for optimal experiences'
  },
  {
    icon: Compass,
    title: 'Adventures',
    description: 'Curated experiences for unforgettable memories'
  },
  {
    icon: Palmtree,
    title: 'Relaxation',
    description: 'Premium stays with guaranteed comfort and luxury'
  }
];

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Travel Smarter with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Blockchain
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the future of travel with transparent pricing, instant rewards, 
              and verified bookings powered by blockchain technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                size="lg"
                className="group"
              >
                Start Exploring
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <HeroFeature
                key={feature.title}
                {...feature}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};