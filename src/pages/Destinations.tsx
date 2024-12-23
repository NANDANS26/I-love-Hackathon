import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountrySelector } from '../components/destinations/CountrySelector';
import { TouristPlaceList } from '../components/destinations/TouristPlaceList';
import { MapView } from '../components/common/MapView';
import { countries } from '../data/countries';
import { DestinationState } from '../types/destinations';

export const Destinations: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<DestinationState>({
    selectedCountry: null,
    selectedPlace: null
  });

  const selectedCountry = countries.find(c => c.id === state.selectedCountry);

  // Update map center when country changes
  const getMapCenter = () => {
    if (selectedCountry && selectedCountry.touristPlaces.length > 0) {
      const firstPlace = selectedCountry.touristPlaces[0];
      return [
        firstPlace.location.coordinates.lat,
        firstPlace.location.coordinates.lng
      ] as [number, number];
    }
    return [20.5937, 78.9629] as [number, number]; // Default center
  };

  const getMapMarkers = () => {
    if (selectedCountry) {
      return selectedCountry.touristPlaces.map(place => ({
        position: [
          place.location.coordinates.lat,
          place.location.coordinates.lng
        ] as [number, number],
        title: place.name,
        type: 'destination' as const
      }));
    }
    return [];
  };

  const handlePlaceSelect = (placeId: string) => {
    if (selectedCountry) {
      navigate(`/destinations/${selectedCountry.id}/${placeId}`);
    }
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
          onSelect={(countryId) => setState({ selectedCountry: countryId, selectedPlace: null })}
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
                  center={getMapCenter()}
                  zoom={6}
                  className="h-[400px] rounded-lg"
                />
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Popular Places</h3>
                  <div className="space-y-3">
                    {selectedCountry.touristPlaces.map(place => (
                      <button
                        key={place.id}
                        onClick={() => handlePlaceSelect(place.id)}
                        className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <p className="font-medium text-gray-900">{place.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {place.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <TouristPlaceList
              places={selectedCountry.touristPlaces}
              onSelect={handlePlaceSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
};