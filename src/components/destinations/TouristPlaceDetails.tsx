import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { MapView } from '../common/MapView';
import { TouristPlace } from '../../types/tourist-place';
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Camera, 
  Activity,
  Clock,
  Star
} from 'lucide-react';
import { Button } from '../ui/Button';

interface TouristPlaceDetailsProps {
  place: TouristPlace;
  onClose: () => void;
}

export const TouristPlaceDetails: React.FC<TouristPlaceDetailsProps> = ({
  place,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-xl"
      >
        <div className="relative h-64 md:h-96">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{place.name}</h2>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{place.rating}</span>
              </div>
            </div>
            <p className="text-gray-600">{place.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Location Details</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{place.location.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{place.bestTimeToVisit}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span>
                    {place.estimatedCost.currency} {place.estimatedCost.min}-
                    {place.estimatedCost.max}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Map</h3>
              <MapView
                markers={[{
                  position: [place.location.coordinates.lat, place.location.coordinates.lng],
                  title: place.name,
                  type: 'destination'
                }]}
                center={[place.location.coordinates.lat, place.location.coordinates.lng]}
                zoom={13}
                className="h-[200px] rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Things to See
              </h3>
              <ul className="space-y-2">
                {place.thingsToSee.map((thing) => (
                  <li key={thing} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    {thing}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Activities
              </h3>
              <ul className="space-y-2">
                {place.activities.map((activity) => (
                  <li key={activity} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    {activity}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={onClose} className="mr-2">
              Close
            </Button>
            <Button variant="primary">
              Book Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};