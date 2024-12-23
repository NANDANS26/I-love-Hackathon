import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, User, Search, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              TravelChain
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/destinations"
              className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Destinations
            </Link>
            <Link
              to="/trending-places"
              className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Trending Places
            </Link>
            <Link
              to="/flights"
              className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Flights
            </Link>
            <Link
              to="/transports"
              className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Transport
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Restaurants
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/search">
              <Search className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400" />
            </Link>
            <Link to="/wallet">
              <Wallet className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400" />
            </Link>
            <Link to="/profile">
              <User className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};