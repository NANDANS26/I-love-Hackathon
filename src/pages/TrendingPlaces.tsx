import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    name: 'Taj Mahal',
    description: 'One of the Seven Wonders of the World, a symbol of eternal love.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    rating: 4.9,
    location: {
      coordinates: { lat: 27.1751, lng: 78.0421 },
      address: 'Agra, Uttar Pradesh'
    },
    trending: {
      rank: 1,
      searchVolume: 25000,
      growthRate: 30,
      category: 'Heritage'
    }
  },
  {
    id: 'trend-2',
    name: 'Varanasi Ghats',
    description: 'Ancient spiritual city with sacred ghats along the Ganges River.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    rating: 4.7,
    location: {
      coordinates: { lat: 25.3176, lng: 83.0062 },
      address: 'Varanasi, Uttar Pradesh'
    },
    trending: {
      rank: 2,
      searchVolume: 18000,
      growthRate: 25,
      category: 'Spiritual'
    }
  },
  {
    id: 'trend-3',
    name: 'Jaipur City Palace',
    description: 'A stunning blend of Rajasthani and Mughal architecture in the Pink City.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    rating: 4.8,
    location: {
      coordinates: { lat: 26.9255, lng: 75.8236 },
      address: 'Jaipur, Rajasthan'
    },
    trending: {
      rank: 3,
      searchVolume: 15000,
      growthRate: 22,
      category: 'Heritage'
    }
  },
  {
    id: 'trend-4',
    name: 'Hampi',
    description: 'Ancient ruins and boulder-strewn landscape of the Vijayanagara Empire.',
    image: 'https://images.unsplash.com/photo-1600100538835-d7cba0af4d0e',
    rating: 4.7,
    location: {
      coordinates: { lat: 15.3350, lng: 76.4600 },
      address: 'Hampi, Karnataka'
    },
    trending: {
      rank: 4,
      searchVolume: 12000,
      growthRate: 20,
      category: 'Historical'
    }
  },
  {
    id: 'trend-5',
    name: 'Valley of Flowers',
    description: 'UNESCO World Heritage site with endemic alpine flowers.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
    rating: 4.9,
    location: {
      coordinates: { lat: 30.7283, lng: 79.6058 },
      address: 'Uttarakhand'
    },
    trending: {
      rank: 5,
      searchVolume: 10000,
      growthRate: 28,
      category: 'Nature'
    }
  },
  {
    id: 'trend-6',
    name: 'Rann of Kutch',
    description: 'Vast white salt desert under starlit skies.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
    rating: 4.6,
    location: {
      coordinates: { lat: 23.8361, lng: 69.8401 },
      address: 'Kutch, Gujarat'
    },
    trending: {
      rank: 6,
      searchVolume: 9000,
      growthRate: 18,
      category: 'Nature'
    }
  }
];

export const TrendingPlaces: React.FC = () => {
  const navigate = useNavigate();
  const mapMarkers = trendingPlaces.map(place => ({
    position: [place.location.coordinates.lat, place.location.coordinates.lng] as [number, number],
    title: place.name,
    type: 'destination' as const
  }));

  const handlePlaceClick = (placeId: string) => {
    navigate(`/trending-places/${placeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Destinations in India
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
            <div 
              key={place.id} 
              onClick={() => handlePlaceClick(place.id)}
              className="cursor-pointer"
            >
              <TrendingPlaceCard place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};