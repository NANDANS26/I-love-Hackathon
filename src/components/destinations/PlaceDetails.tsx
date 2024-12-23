import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { TouristPlace } from '../../types/tourist-place';
import { PlaceDetailsHeader } from './PlaceDetailsHeader';
import { PlaceDetailsLocation } from './PlaceDetailsLocation';
import { PlaceDetailsActivities } from './PlaceDetailsActivities';

interface PlaceDetailsProps {
  place: TouristPlace;
  onClose: () => void;
}

export const PlaceDetails: React.FC<PlaceDetailsProps> = ({ place, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-xl"
      >
        <PlaceDetailsHeader
          name={place.name}
          description={place.description}
          rating={place.rating}
          image={place.image}
          onClose={onClose}
        />

        <div className="p-6">
          <PlaceDetailsLocation
            address={place.location.address}
            bestTimeToVisit={place.bestTimeToVisit}
            estimatedCost={place.estimatedCost}
            coordinates={place.location.coordinates}
          />

          <PlaceDetailsActivities
            thingsToSee={place.thingsToSee}
            activities={place.activities}
          />

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