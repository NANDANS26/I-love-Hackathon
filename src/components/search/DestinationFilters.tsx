import React from 'react';
import { Globe, Filter } from 'lucide-react';

interface DestinationFiltersProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export const DestinationFilters: React.FC<DestinationFiltersProps> = ({
  selectedRegion,
  onRegionChange
}) => {
  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'americas', name: 'Americas' },
    { id: 'australia', name: 'Australia & Pacific' }
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Globe className="w-5 h-5 text-gray-500" />
        <h3 className="font-medium text-gray-900">Filter by Region</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onRegionChange(region.id)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedRegion === region.id
                ? 'bg-teal-100 text-teal-800'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>
    </div>
  );
};