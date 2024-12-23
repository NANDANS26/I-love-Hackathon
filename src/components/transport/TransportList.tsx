import React from 'react';
import { TrainCard } from './TrainCard';
import { CabCard } from './CabCard';
import { Transport } from '../../types/transport';

interface TransportListProps {
  transports: Transport[];
  onBook: (id: string) => void;
}

export const TransportList: React.FC<TransportListProps> = ({
  transports,
  onBook
}) => {
  const trains = transports.filter(t => t.type === 'train');
  const cabs = transports.filter(t => t.type === 'cab');

  return (
    <div className="space-y-8">
      {trains.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Trains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trains.map(transport => (
              <TrainCard
                key={transport.id}
                transport={transport}
                onBook={onBook}
              />
            ))}
          </div>
        </div>
      )}

      {cabs.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Cabs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabs.map(transport => (
              <CabCard
                key={transport.id}
                transport={transport}
                onBook={onBook}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};