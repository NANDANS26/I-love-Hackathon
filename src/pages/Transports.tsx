import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { TransportCard } from '../components/transport/TransportCard';
import { TransportMap } from '../components/transport/TransportMap';
import { TransportStats } from '../components/transport/TransportStats';
import { transportation } from '../data/transportation';

export const Transports: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleBookTransport = (transportId: string) => {
    setSelectedTransport(transportId);
  };

  const filteredTransports = transportation.filter(transport =>
    transport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transport.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTransportData = transportation.find(t => t.id === selectedTransport);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Ground Transportation
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <TransportMap
                selectedTransport={selectedTransportData}
                allTransports={filteredTransports}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTransports.map((transport) => (
                <TransportCard
                  key={transport.id}
                  transport={transport}
                  onBook={handleBookTransport}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <TransportStats transports={filteredTransports} />
          </div>
        </div>
      </div>
    </div>
  );
};