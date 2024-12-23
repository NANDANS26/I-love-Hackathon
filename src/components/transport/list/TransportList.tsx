import React from 'react';
import { Transport } from '../../../types/transport';
import { TransportCard } from '../TransportCard';

interface TransportListProps {
  transports: Transport[];
}

export const TransportList: React.FC<TransportListProps> = ({ transports }) => {
  if (transports.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No transport options available for the selected criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {transports.map((transport) => (
        <TransportCard key={transport.id} transport={transport} />
      ))}
    </div>
  );
};