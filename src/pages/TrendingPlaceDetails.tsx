import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapView } from '../components/common/MapView';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  MapPin, 
  Star, 
  TrendingUp, 
  Users, 
  Calendar,
  Clock,
  Camera,
  Info
} from 'lucide-react';
import { formatCurrency } from '../utils/currency';
import { trendingPlacesData } from '../data/trendingPlacesData';

export const TrendingPlaceDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = id ? trendingPlacesData[id] : null;

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Place not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">{place.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{place.name}</h1>
              <p className="text-gray-600 mb-6">{place.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{place.location.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Rank #{place.trending.rank} Trending</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Visit Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Entry Fee</h3>
                  <p className="text-gray-600">
                    Indian Nationals: {formatCurrency(place.details.entryFee.indian)}<br />
                    Foreign Nationals: {formatCurrency(place.details.entryFee.foreign)}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Timings</h3>
                  <p className="text-gray-600">{place.details.timings}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Best Time to Visit</h3>
                  <p className="text-gray-600">{place.details.bestTimeToVisit}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Average Time Required</h3>
                  <p className="text-gray-600">{place.details.averageTimeRequired}</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Key Attractions</h2>
                <ul className="space-y-2">
                  {place.attractions.map((attraction, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Info className="w-4 h-4 text-teal-500" />
                      <span className="text-gray-600">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Activities</h2>
                <ul className="space-y-2">
                  {place.activities.map((activity, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Camera className="w-4 h-4 text-teal-500" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Location & Transport</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Nearest Airport</h3>
                  <p className="text-gray-600">{place.location.nearestAirport}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Nearest Railway Station</h3>
                  <p className="text-gray-600">{place.location.nearestRailway}</p>
                </div>
              </div>

              <MapView
                markers={[{
                  position: [place.location.coordinates.lat, place.location.coordinates.lng],
                  title: place.name,
                  type: 'destination'
                }]}
                center={[place.location.coordinates.lat, place.location.coordinates.lng]}
                zoom={13}
                className="h-[200px] rounded-lg mb-6"
              />

              <Button variant="primary" className="w-full">
                Plan Your Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};