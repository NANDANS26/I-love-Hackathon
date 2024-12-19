import React from 'react';
import { Shield, Coins, Leaf, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Transparent Booking',
    description: 'Every transaction is recorded on the blockchain, ensuring complete transparency.'
  },
  {
    icon: Coins,
    title: 'Loyalty Rewards',
    description: 'Earn tokens for every booking and redeem them for exclusive travel perks.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Support sustainable travel with our verified eco-friendly partners.'
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your transactions are protected by advanced blockchain technology.'
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose TravelChain?
          </h2>
          <p className="text-lg text-gray-600">
            Experience the future of travel with blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};