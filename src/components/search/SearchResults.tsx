import React from 'react';
import { MapView } from '../common/MapView';
import { Hotel } from '../../types';
import { Flight } from '../../types/transport';
import { Restaurant } from '../../types';

interface SearchResultsProps {
  results: (Hotel | Flight | Restaurant)[];
  type: 'hotels' | 'flights' | 'restaurants';
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, type }) => {
  const getMarkers = () => {
    return results.map(result => {
      if ('location' in result) {
        const location = typeof result.location === 'string' 
          ? getCoordinatesFromAddress(result.location)
          : [result.location.coordinates.lat, result.location.coordinates.lng];
        
        return {
          position: location as [number, number],
          title: result.name,
          type
        };
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <MapView
          markers={getMarkers()}
          className="mb-8"
        />
        {/* Render result cards */}
      </div>
      <div className="lg:col-span-1">
        {/* Filters and statistics */}
      </div>
    </div>
  );
};

// Helper function to mock coordinates (in a real app, use geocoding service)
const getCoordinatesFromAddress = (address: string): [number, number] => {
  // Mock implementation
  return [20.5937, 78.9629];
}; 