import React, { useState, useMemo } from 'react';
import { TransportTypeFilter } from '../components/transport/filters/TransportTypeFilter';
import { TransportSearchFilter } from '../components/transport/filters/TransportSearchFilter';
import { TransportList } from '../components/transport/list/TransportList';
import { TransportStats } from '../components/transport/stats/TransportStats';
import { TransportMap } from '../components/transport/TransportMap';
import { transportation } from '../data/transportation';

export const Transports: React.FC = () => {
  const [activeType, setActiveType] = useState<'train' | 'cab'>('train');
  const [searchFilters, setSearchFilters] = useState<{
    date?: string;
    route?: string;
  }>({});

  const filteredTransports = useMemo(() => {
    let filtered = transportation.filter(t => t.type === activeType);

    if (searchFilters.route) {
      filtered = filtered.filter(t => 
        t.route.toLowerCase().includes(searchFilters.route!.toLowerCase())
      );
    }

    return filtered;
  }, [activeType, searchFilters]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Ground Transportation
          </h1>

          <div className="space-y-6">
            <TransportTypeFilter
              activeType={activeType}
              onTypeChange={setActiveType}
            />

            <TransportSearchFilter
              onSearch={setSearchFilters}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <TransportMap
                selectedTransport={undefined}
                allTransports={filteredTransports}
              />
            </div>
            <TransportList transports={filteredTransports} />
          </div>
          
          <div className="lg:col-span-1">
            <TransportStats
              transports={filteredTransports}
              type={activeType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};