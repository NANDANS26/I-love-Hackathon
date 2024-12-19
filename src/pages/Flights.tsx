import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { FlightCard } from '../components/flights/FlightCard';
import { MapView } from '../components/common/MapView';
import { flights } from '../data/flights';

const flightCoordinates: Record<string, [number, number]> = {
  'Mumbai': [19.0760, 72.8777],
  'Delhi': [28.6139, 77.2090],
  'Bangalore': [12.9716, 77.5946],
  'Chennai': [13.0827, 80.2707],
  'Kolkata': [22.5726, 88.3639],
  'Hyderabad': [17.3850, 78.4867],
  'Goa': [15.2993, 73.9840],
  'Jaipur': [26.9124, 75.7873]
};

export const Flights: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredFlights = flights.filter(flight =>
    flight.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    flight.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    flight.airline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMapMarkers = () => {
    const allMarkers = filteredFlights.flatMap(flight => [
      {
        position: flightCoordinates[flight.origin],
        title: `${flight.origin} (${flight.airline})`,
        type: 'flight' as const
      },
      {
        position: flightCoordinates[flight.destination],
        title: `${flight.destination} (${flight.airline})`,
        type: 'flight' as const
      }
    ]);

    return allMarkers.filter(marker => marker.position); // Filter out undefined positions
  };

  const getFlightPath = () => {
    if (selectedFlight) {
      const flight = flights.find(f => f.id === selectedFlight);
      if (flight) {
        return [
          flightCoordinates[flight.origin],
          flightCoordinates[flight.destination]
        ] as [[number, number], [number, number]];
      }
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Available Flights
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <MapView
                markers={getMapMarkers()}
                flightPath={getFlightPath()}
                center={[20.5937, 78.9629]}
                zoom={4}
                className="h-[400px] rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  onBook={() => setSelectedFlight(flight.id)}
                  isSelected={selectedFlight === flight.id}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Flight Statistics</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Flights</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {filteredFlights.length}
                    </p>
                  </div>
                  {filteredFlights.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-600">Price Range</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${Math.min(...filteredFlights.map(f => f.price))} - 
                        ${Math.max(...filteredFlights.map(f => f.price))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 