import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { FilterPanel } from '../components/search/FilterPanel';
import { DestinationFilters } from '../components/search/DestinationFilters';
import { SearchFilters } from '../types/search';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { HotelCard } from '../components/hotels/HotelCard';
import { MapView } from '../components/common/MapView';
import { popularDestinations } from '../data/destinations';
import { worldDestinations } from '../data/worldDestinations';
import { hotels } from '../data/hotels';

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'destinations',
    priceRange: { min: 0, max: 1000 },
    ecoCertified: false,
    sortBy: 'rating'
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const getFilteredResults = () => {
    let results = [...popularDestinations, ...worldDestinations];

    // Filter by region
    if (selectedRegion !== 'all') {
      results = results.filter(item => item.id.startsWith(selectedRegion));
    }

    // Filter by search query and other criteria
    results = results.filter(item => 
      (searchQuery === '' || 
       item.name.toLowerCase().includes(searchQuery) ||
       item.description.toLowerCase().includes(searchQuery) ||
       item.location.toLowerCase().includes(searchQuery)) &&
      (!filters.ecoCertified || item.ecoCertified)
    );

    // Apply sorting
    if (filters.sortBy) {
      results.sort((a, b) => {
        switch (filters.sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'eco':
            return (b.ecoCertified ? 1 : 0) - (a.ecoCertified ? 1 : 0);
          default:
            return 0;
        }
      });
    }

    return results;
  };

  const filteredResults = getFilteredResults();

  const getMapMarkers = () => {
    return filteredResults.map(item => ({
      position: getDestinationCoordinates(item.location),
      title: item.name,
      type: filters.category
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Amazing Destinations
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <DestinationFilters
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
            />
            <FilterPanel
              category={filters.category}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <MapView
                markers={getMapMarkers()}
                center={[20, 0]}
                zoom={2}
                className="h-[400px] rounded-lg"
              />
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No destinations found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResults.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get coordinates for destinations
const getDestinationCoordinates = (location: string): [number, number] => {
  const coordinates: Record<string, [number, number]> = {
    'Paris, France': [48.8566, 2.3522],
    'Rome, Italy': [41.9028, 12.4964],
    'Honshu, Japan': [35.3606, 138.7278],
    'Cusco Region, Peru': [-13.1631, -72.5450],
    'Queensland, Australia': [-16.9203, 145.7710],
    // Add more coordinates as needed
  };

  return coordinates[location] || [0, 0];
};