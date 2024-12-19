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
}