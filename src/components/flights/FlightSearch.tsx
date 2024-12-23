import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Button } from '../ui/Button';

interface FlightSearchProps {
  selectedRegion: 'overseas' | 'indian' | '';
  onRegionChange: (region: 'overseas' | 'indian' | '') => void;
  onSearch: () => void;
}

export const FlightSearch: React.FC<FlightSearchProps> = ({
  selectedRegion,
  onRegionChange,
  onSearch
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-lg">
      <div className="flex-1">
        <select
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value as 'overseas' | 'indian' | '')}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select Flight Region</option>
          <option value="indian">Indian Flights</option>
          <option value="overseas">International Flights</option>
        </select>
      </div>

      <Button 
        variant="primary" 
        onClick={onSearch}
        className="flex items-center gap-2"
      >
        <SearchIcon className="w-5 h-5" />
        <span>Search Flights</span>
      </Button>
    </div>
  );
};