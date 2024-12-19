import React from 'react';
import { Hero } from '../components/home/Hero';
import { Benefits } from '../components/home/Benefits';
import { PopularDestinations } from '../components/destinations/PopularDestinations';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <PopularDestinations />
    </div>
  );
};