export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  pricePerNight: number;
  location: string;
  amenities: string[];
  ecoCertified: boolean;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  rating: number;
  ecoCertified: boolean;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    nearestAirport: string;
  };
  description: string;
  bestTimeToVisit: string;
  timings: string;
  entryFee: {
    indian: number;
    foreign: number;
    currency: string;
  };
  features: string[];
  nearbyAttractions: string[];
  transportation: {
    [key: string]: boolean;
  };
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  class: string;
  availableSeats: number;
}

export type TrendingPlace = {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  trending: {
    rank: number;
    searchVolume: number;
    growthRate: number;
  };
};
