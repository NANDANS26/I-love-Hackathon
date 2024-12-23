import React from 'react';
import { Train, Car } from 'lucide-react';
import { Button } from '../../ui/Button';

interface TransportTypeFilterProps {
  activeType: 'train' | 'cab';
  onTypeChange: (type: 'train' | 'cab') => void;
}

export const TransportTypeFilter: React.FC<TransportTypeFilterProps> = ({
  activeType,
  onTypeChange
}) => {
  return (
    <div className="flex space-x-4">
      <Button
        variant={activeType === 'train' ? 'primary' : 'outline'}
        onClick={() => onTypeChange('train')}
        className="flex items-center space-x-2"
      >
        <Train className="w-5 h-5" />
        <span>Trains</span>
      </Button>
      <Button
        variant={activeType === 'cab' ? 'primary' : 'outline'}
        onClick={() => onTypeChange('cab')}
        className="flex items-center space-x-2"
      >
        <Car className="w-5 h-5" />
        <span>Cabs</span>
      </Button>
    </div>
  );
};