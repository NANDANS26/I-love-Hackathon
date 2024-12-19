import React from 'react';
import { TrendingPlaceCard } from '../components/trending/TrendingPlaceCard';
import { MapView } from '../components/common/MapView';

interface TrendingPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  };
  trending: {
    rank: number;
    searchVolume: number;
    growthRate: number;
    category: string;
  };
}

const trendingPlaces: TrendingPlace[] = [
  {
    id: 'trend-1',
    name: 'Ladakh',
    description: 'Experience the magical landscapes and Buddhist monasteries.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
    rating: 4.8,
    location: {
      coordinates: { lat: 34.1526, lng: 77.5771 },
      address: 'Ladakh, India'
    },
    trending: {
      rank: 1,
      searchVolume: 15000,
      growthRate: 25,
      category: 'Adventure'
    }
  },
  {
    id: 'trend-2',
    name: 'Coorg',
    description: 'Scotland of India with coffee plantations and misty hills.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
    rating: 4.7,
    location: {
      coordinates: { lat: 12.4244, lng: 75.7382 },
      address: 'Coorg, Karnataka'
    },
    trending: {
      rank: 2,
      searchVolume: 12000,
      growthRate: 20,
      category: 'Nature'
    }
  },
  {
    id: 'trend-3',
    name: 'Rann of Kutch',
    description: 'Vast white salt desert under starlit skies.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
    rating: 4.6,
    location: {
      coordinates: { lat: 23.8361, lng: 69.8401 },
      address: 'Kutch, Gujarat'
    },
    trending: {
      rank: 3,
      searchVolume: 10000,
      growthRate: 18,
      category: 'Cultural'
    }
  },
  {
    id: 'trend-4',
    name: 'Valley of Flowers',
    description: 'UNESCO World Heritage site with endemic alpine flowers.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
    rating: 4.9,
    location: {
      coordinates: { lat: 30.7283, lng: 79.6058 },
      address: 'Uttarakhand, India'
    },
    trending: {
      rank: 4,
      searchVolume: 8000,
      growthRate: 22,
      category: 'Nature'
    }
  },
  {
    id: 'trend-5',
    name: 'Hampi',
    description: 'Ancient ruins and boulder-strewn landscape.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
    rating: 4.7,
    location: {
      coordinates: { lat: 15.3350, lng: 76.4600 },
      address: 'Hampi, Karnataka'
    },
    trending: {
      rank: 5,
      searchVolume: 9000,
      growthRate: 15,
      category: 'Historical'
    }
  }
];

export const TrendingPlaces: React.FC = () => {
  const mapMarkers = trendingPlaces.map(place => ({
    position: [place.location.coordinates.lat, place.location.coordinates.lng] as [number, number],
    title: place.name,
    type: 'destination' as const
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Destinations
          </h1>
          <p className="text-lg text-gray-600">
            Discover the most popular places travelers are exploring right now
          </p>
        </div>

        <div className="mb-12">
          <MapView
            markers={mapMarkers}
            center={[20.5937, 78.9629]}
            zoom={5}
            className="h-[400px] rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPlaces.map((place) => (
            <TrendingPlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};