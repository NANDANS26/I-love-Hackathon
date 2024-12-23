import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import {
  Clock,
  MapPin,
  DollarSign,
  Award,
  Utensils,
  Check,
  Phone,
  Globe,
  Instagram
} from 'lucide-react';
import { Restaurant } from '../../types';
import { formatCurrency } from '../../utils/currency';
import { MapView } from '../common/MapView';

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  onBookNow: () => void;
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
  onBookNow
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        {restaurant.verified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Verified Restaurant
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {restaurant.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <Rating value={restaurant.rating} />
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">{restaurant.cuisine}</span>
              <span className="text-gray-600">|</span>
              <span className="font-medium text-gray-900">{restaurant.priceRange}</span>
            </div>
            <p className="text-gray-600 mb-6">{restaurant.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Opening Hours</h3>
                  <p className="text-sm text-gray-600">Mon-Fri: {restaurant.openingHours.mon_fri}</p>
                  <p className="text-sm text-gray-600">Weekends: {restaurant.openingHours.weekends}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <DollarSign className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Average Cost</h3>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(restaurant.averageCost)} per person
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {restaurant.specialties.map((specialty) => (
                <div
                  key={specialty}
                  className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                >
                  <Utensils className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">{specialty}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {restaurant.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                >
                  <Award className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Location & Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-600">{restaurant.location.address}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Near {restaurant.location.landmark}
                  </p>
                </div>
              </div>

              {restaurant.contact?.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600">{restaurant.contact.phone}</p>
                </div>
              )}

              {restaurant.contact?.website && (
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <a
                    href={restaurant.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}

              {restaurant.contact?.social?.instagram && (
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-gray-400" />
                  <a
                    href={`https://instagram.com/${restaurant.contact.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    @{restaurant.contact.social.instagram}
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6">
              <MapView
                markers={[{
                  position: [restaurant.location.coordinates.lat, restaurant.location.coordinates.lng],
                  title: restaurant.name,
                  type: 'restaurant'
                }]}
                center={[restaurant.location.coordinates.lat, restaurant.location.coordinates.lng]}
                zoom={15}
                className="h-[200px] rounded-lg mb-6"
              />
            </div>

            <Button 
              variant="primary" 
              className="w-full"
              onClick={onBookNow}
            >
              Book a Table
            </Button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};