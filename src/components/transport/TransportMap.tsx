import React from 'react';
import { MapView } from '../common/MapView';
import { Transport } from '../../types/transport';
import { getTransportMapData } from '../../utils/transportMap';

interface TransportMapProps {
  selectedTransport?: Transport;
  allTransports: Transport[];
  className?: string;
}

export const TransportMap: React.FC<TransportMapProps> = ({
  selectedTransport,
  allTransports,
  className
}) => {
  const { markers, path } = getTransportMapData(selectedTransport, allTransports);

  return (
    <MapView
      markers={markers}
      flightPath={path}
      center={[20.5937, 78.9629]}
      zoom={5}
      className={`h-[400px] rounded-lg ${className || ''}`}
    />
  );
};