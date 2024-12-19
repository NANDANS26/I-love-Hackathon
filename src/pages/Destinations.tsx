import React, { useState } from 'react';
import { CountrySelector } from '../components/destinations/CountrySelector';
import { TouristPlaceList } from '../components/destinations/TouristPlaceList';
import { MapView } from '../components/common/MapView';
import { countries } from '../data/countries';
import { DestinationState } from '../types/destinations';

export const Destinations: React.FC = () => {
  const [state, setState] = useState<DestinationState>({
    selectedCountry: null,
    selectedPlace: null
  });

  const selectedCountry = countries.filter(c => c.id === state.selectedCountry)[0];

  const getMapMarkers = () => {
    if (selectedCountry) {
      return selectedCountry.touristPlaces.map(place => ({
        position: [place.location.coordinates.lat, place.location.coordinates.lng] as [number, number],
        title: place.name,
        type: 'destination' as const
      }));
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Destinations
          </h1>
          <p className="text-lg text-gray-600">
            Select a country to discover its most amazing places
          </p>
        </div>

        <CountrySelector
          countries={countries}
          selectedCountry={state.selectedCountry}
          onSelect={(countryId) => setState({ ...state, selectedCountry: countryId })}
        />

        {selectedCountry && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCountry.flag} {selectedCountry.name}
              </h2>
              <p className="text-gray-600">{selectedCountry.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <MapView
                  markers={getMapMarkers()}
                  center={selectedCountry.touristPlaces[0]?.location.coordinates 
                    ? [selectedCountry.touristPlaces[0].location.coordinates.lat, selectedCountry.touristPlaces[0].location.coordinates.lng]
                    : [20.5937, 78.9629]}
                  zoom={6}
                  className="h-[400px] rounded-lg"
                />
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Country Info</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Places to Visit: {selectedCountry.touristPlaces.length}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCountry.touristPlaces.map(place => (
                        <span key={place.id} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                          {place.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TouristPlaceList
              places={selectedCountry.touristPlaces}
              onSelect={(placeId) => setState({ ...state, selectedPlace: placeId })}
            />
          </div>
        )}
      </div>
    </div>
  );
};