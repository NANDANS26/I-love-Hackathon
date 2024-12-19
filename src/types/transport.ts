import { Hotel } from '../types';

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

export interface Transport {
  id: string;
  type: 'train' | 'cab';
  name: string;
  route: string;
  price: number;
  // Train specific fields
  departureTime?: string;
  arrivalTime?: string;
  class?: string;
  // Cab specific fields
  vehicleType?: string;
  seatingCapacity?: number;
}

export interface TrendingPlace {
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
}