export interface TouristPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  bestTimeToVisit: string;
  thingsToSee: string[];
  activities: string[];
  estimatedCost: {
    currency: string;
    min: number;
    max: number;
  };
  openingHours?: {
    weekdays: string;
    weekends: string;
    holidays?: string;
  };
  accessibility?: {
    wheelchairAccessible: boolean;
    publicTransport: boolean;
    parking: boolean;
  };
  guidedTours?: {
    available: boolean;
    languages: string[];
    duration: string;
  };
}