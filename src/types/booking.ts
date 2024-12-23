export type BookingType = 'flight' | 'hotel' | 'restaurant' | 'destination' | 'transport';

export interface BookingDetails {
  id: string;
  userId: string;
  type: BookingType;
  name: string;
  bookingDate: string;
  visitDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentMethod: 'token' | 'card';
  specialRequests?: string;
  tokenRewards: number;
  
  // Type-specific details
  flightDetails?: {
    airline: string;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    class: string;
  };
  
  transportDetails?: {
    type: 'train' | 'cab';
    route: string;
    departureTime?: string;
    arrivalTime?: string;
    class?: string;
    vehicleType?: string;
  };
}