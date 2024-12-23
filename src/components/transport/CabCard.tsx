import React, { useState } from 'react';
import { Car, Users, MapPin, Wifi, Music, Battery } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { BookingModal } from '../booking/BookingModal';
import { Transport } from '../../types/transport';
import { formatCurrency } from '../../utils/currency';

interface CabCardProps {
  transport: Transport;
  onBook: (id: string) => void;
}

export const CabCard: React.FC<CabCardProps> = ({ transport, onBook }) => {
  const [showBooking, setShowBooking] = useState(false);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'music system':
        return <Music className="w-4 h-4" />;
      case 'ac':
        return <Battery className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <Car className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{transport.name}</h3>
            <p className="text-sm text-gray-500">{transport.vehicleType}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-green-600">
          {formatCurrency(transport.price)}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{transport.route}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>{transport.seatingCapacity} seats</span>
        </div>
      </div>

      {transport.amenities && (
        <div className="flex flex-wrap gap-2 mb-4">
          {transport.amenities.map((amenity, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {getAmenityIcon(amenity)}
              {amenity && <span className="ml-1">{amenity}</span>}
            </span>
          ))}
        </div>
      )}

      <Button
        variant="primary"
        className="w-full"
        onClick={() => setShowBooking(true)}
      >
        Book Cab
      </Button>

      {showBooking && (
        <BookingModal
          title={`Book Cab - ${transport.name}`}
          type="transport"
          itemDetails={{
            id: transport.id,
            name: transport.name,
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
            price: transport.price,
            type: 'transport',
            route: transport.route,
            vehicleType: transport.vehicleType,
            seatingCapacity: transport.seatingCapacity
          }}
          onClose={() => {
            setShowBooking(false);
            onBook(transport.id);
          }}
        />
      )}
    </Card>
  );
};