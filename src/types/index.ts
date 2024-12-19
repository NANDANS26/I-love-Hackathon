export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  ecoCertified: boolean;
  features?: string[];
  nearbyAttractions?: string[];
  location?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
    landmark: string;
  };
  features: string[];
  openingHours: {
    mon_fri: string;
    weekends: string;
  };
  specialties: string[];
  averageCost: number;
  verified: boolean;
  contact?: {
    phone?: string;
    website?: string;
    social?: {
      instagram?: string;
    };
  };
}

export interface Vehicle {
  id: string;
  type: 'flight' | 'ship' | 'train' | 'car' | 'bike' | 'ev';
  name: string;
  price: number;
  seats: number;
  ecoFriendly: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;
  tokenBalance: number;
  bookingHistory: Booking[];
  favorites: {
    destinations: string[];
    restaurants: string[];
    vehicles: string[];
  };
}

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  vehicleId?: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  tokenRewards: number;
}

export interface WalletTransaction {
  id: string;
  type: 'reward' | 'payment' | 'transfer';
  amount: number;
  timestamp: string;
  description: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface ComparisonItem {
  id: string;
  type: 'destination' | 'restaurant' | 'vehicle';
}

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