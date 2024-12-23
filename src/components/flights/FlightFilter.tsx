import React from 'react';
import { Button } from '../ui/Button';

interface FlightFilterProps {
  selectedType: 'all' | 'indian' | 'international';
  onTypeChange: (type: 'all' | 'indian' | 'international') => void;
}

export const FlightFilter: React.FC<FlightFilterProps> = ({
  selectedType,
  onTypeChange
}) => {
  return (
    <div className="flex space-x-4 mb-6">
      <Button
        variant={selectedType === 'all' ? 'primary' : 'outline'}
        onClick={() => onTypeChange('all')}
      >
        All Flights
      </Button>
      <Button
        variant={selectedType === 'indian' ? 'primary' : 'outline'}
        onClick={() => onTypeChange('indian')}
      >
        Domestic Flights
      </Button>
      <Button
        variant={selectedType === 'international' ? 'primary' : 'outline'}
        onClick={() => onTypeChange('international')}
      >
        International Flights
      </Button>
    </div>
  );
};