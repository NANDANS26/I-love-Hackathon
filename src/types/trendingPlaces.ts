export interface TrendingPlaceDetails {
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
    nearestAirport: string;
    nearestRailway: string;
  };
  trending: {
    rank: number;
    searchVolume: number;
    growthRate: number;
    category: string;
  };
  details: {
    entryFee: {
      indian: number;
      foreign: number;
    };
    timings: string;
    bestTimeToVisit: string;
    averageTimeRequired: string;
    photography: string;
    guidedTours: string;
  };
  attractions: string[];
  activities: string[];
}