import React from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { HotelCard } from '../components/hotels/HotelCard';
import { hotels } from '../data/hotels';

export const Hotels: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching hotels:', query);
  };

  const handleBookNow = (hotelId: string) => {
    console.log('Booking hotel:', hotelId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Hotels
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};