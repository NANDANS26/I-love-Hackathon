import React, { useState } from 'react';
import { FlightFilter } from '../components/flights/FlightFilter';
import { FlightDetails } from '../components/flights/FlightDetails';
import { MapView } from '../components/common/MapView';
import { flights } from '../data/flights';
import { flightCoordinates } from '../utils/map';

export const Flights: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'indian' | 'international'>('all');
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  const filteredFlights = flights.filter(flight => 
    selectedType === 'all' ? true : flight.type === selectedType
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

    return allMarkers.filter(marker => marker.position);
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
          <FlightFilter
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <MapView
                markers={getMapMarkers()}
                flightPath={getFlightPath()}
                center={[20.5937, 78.9629]}
                zoom={selectedType === 'international' ? 2 : 4}
                className="h-[400px] rounded-lg"
              />
            </div>
            <div className="space-y-6">
              {filteredFlights.map((flight) => (
                <FlightDetails
                  key={flight.id}
                  {...flight}
                  onClick={() => setSelectedFlight(flight.id)}
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
                    <>
                      <div>
                        <p className="text-sm text-gray-600">Price Range</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{Math.min(...filteredFlights.map(f => f.price))} - 
                          ₹{Math.max(...filteredFlights.map(f => f.price))}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Available Routes</p>
                        <div className="mt-2 space-y-2">
                          {Array.from(new Set(filteredFlights.map(f => `${f.origin} - ${f.destination}`))).map(route => (
                            <div key={route} className="text-sm bg-gray-50 p-2 rounded">
                              {route}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
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