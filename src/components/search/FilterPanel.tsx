import React from 'react';
import { Slider } from '../ui/Slider';
import { Button } from '../ui/Button';
import { SearchFilters, FilterCategory } from '../../types/search';
import { Star, Leaf, Car } from 'lucide-react';

interface FilterPanelProps {
  category: FilterCategory;
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  category,
  filters,
  onFilterChange,
}) => {
  const handlePriceChange = (value: [number, number]) => {
    onFilterChange({
      ...filters,
      priceRange: { min: value[0], max: value[1] }
    });
  };

  const toggleEcoCertified = () => {
    onFilterChange({
      ...filters,
      ecoCertified: !filters.ecoCertified
    });
  };

  const handleSortChange = (sortBy: SearchFilters['sortBy']) => {
    onFilterChange({
      ...filters,
      sortBy
    });
  };

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={[
                filters.priceRange?.min || 0,
                filters.priceRange?.max || 1000
              ]}
              onChange={handlePriceChange}
            />
          </div>

          <div>
            <button
              onClick={toggleEcoCertified}
              className={`flex items-center space-x-2 p-2 rounded-lg w-full ${
                filters.ecoCertified
                  ? 'bg-green-50 text-green-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Leaf className="w-5 h-5" />
              <span>Eco-Certified Only</span>
            </button>
          </div>

          {category === 'vehicles' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['car', 'bike', 'ev'].map((type) => (
                  <button
                    key={type}
                    onClick={() => onFilterChange({
                      ...filters,
                      vehicleType: type
                    })}
                    className={`p-2 rounded-lg flex items-center space-x-2 ${
                      filters.vehicleType === type
                        ? 'bg-teal-50 text-teal-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Car className="w-4 h-4" />
                    <span className="capitalize">{type}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Sort By</h3>
        <div className="space-y-2">
          {[
            { value: 'price_asc', label: 'Lowest Price' },
            { value: 'price_desc', label: 'Highest Price' },
            { value: 'rating', label: 'Highest Rating' },
            { value: 'eco', label: 'Eco-Friendly First' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value as SearchFilters['sortBy'])}
              className={`flex items-center space-x-2 p-2 rounded-lg w-full ${
                filters.sortBy === option.value
                  ? 'bg-teal-50 text-teal-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              {option.value.includes('rating') && <Star className="w-4 h-4" />}
              {option.value.includes('eco') && <Leaf className="w-4 h-4" />}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};