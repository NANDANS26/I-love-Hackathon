import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import {
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Check,
  Plane,
  Bus,
  Train,
  Car,
  Camera,
  Sun,
  Umbrella
} from 'lucide-react';
import { Destination } from '../../types';
import { MapView } from '../common/MapView';
import { formatCurrency } from '../../utils/currency';

interface DestinationDetailsProps {
  destination: Destination;
}

export const DestinationDetails: React.FC<DestinationDetailsProps> = ({
  destination
}) => {
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'train':
        return <Train className="w-5 h-5" />;
      case 'bus':
        return <Bus className="w-5 h-5" />;
      case 'taxi':
        return <Car className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <Rating value={destination.rating} />
              <span className="text-gray-600">|</span>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                <span className="text-gray-600">{destination.location.address}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{destination.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Best Time to Visit</h3>
                  <p className="text-sm text-gray-600">{destination.bestTimeToVisit}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Timings</h3>
                  <p className="text-sm text-gray-600">{destination.timings}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Entry Fee</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Indian Nationals</h3>
                <p className="text-2xl font-bold text-teal-600">
                  {formatCurrency(destination.entryFee.indian, destination.entryFee.currency)}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Foreign Nationals</h3>
                <p className="text-2xl font-bold text-teal-600">
                  {formatCurrency(destination.entryFee.foreign, destination.entryFee.currency)}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Features & Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Key Features</h3>
                <div className="space-y-2">
                  {destination.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-teal-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Nearby Attractions</h3>
                <div className="space-y-2">
                  {destination.nearbyAttractions.map((attraction) => (
                    <div
                      key={attraction}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <MapPin className="w-5 h-5 text-teal-500" />
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Location & Transport</h2>
            <div className="mb-4">
              <div className="flex items-start space-x-3 mb-2">
                <Plane className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Nearest Airport</h3>
                  <p className="text-sm text-gray-600">{destination.location.nearestAirport}</p>
                </div>
              </div>
            </div>

            <MapView
              markers={[{
                position: [destination.location.coordinates.lat, destination.location.coordinates.lng],
                title: destination.name,
                type: 'destination'
              }]}
              center={[destination.location.coordinates.lat, destination.location.coordinates.lng]}
              zoom={12}
            />

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-3">Available Transport</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(destination.transportation).map((type) => (
                  destination.transportation[type] && (
                    <div
                      key={type}
                      className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg"
                    >
                      {getTransportIcon(type)}
                      <span className="capitalize text-gray-700">{type}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};