import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { FilterPanel } from '../components/search/FilterPanel';
import { SearchFilters } from '../types/search';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { popularDestinations } from '../data/destinations';

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'destinations',
    priceRange: { min: 0, max: 1000 },
    ecoCertified: false,
    sortBy: 'rating'
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  // Filter destinations based on search query and filters
  const filteredDestinations = popularDestinations.filter((destination) => {
    if (searchQuery && !destination.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.ecoCertified && !destination.ecoCertified) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel
              category={filters.category}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};