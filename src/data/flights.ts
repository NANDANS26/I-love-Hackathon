import { Flight } from '../types';

export const flights: Flight[] = [
  {
    id: 'flight-1',
    airline: 'Air India',
    flightNumber: 'AI302',
    origin: 'Mumbai',
    destination: 'Delhi',
    departureTime: '10:00',
    arrivalTime: '12:00',
    price: 150,
    class: 'Economy',
    availableSeats: 45
  },
  {
    id: 'flight-2',
    airline: 'IndiGo',
    flightNumber: '6E321',
    origin: 'Bangalore',
    destination: 'Goa',
    departureTime: '14:30',
    arrivalTime: '16:00',
    price: 120,
    class: 'Economy',
    availableSeats: 32
  },
  {
    id: 'flight-3',
    airline: 'Vistara',
    flightNumber: 'UK789',
    origin: 'Delhi',
    destination: 'Mumbai',
    departureTime: '18:00',
    arrivalTime: '20:00',
    price: 180,
    class: 'Business',
    availableSeats: 12
  },
  {
    id: 'flight-4',
    airline: 'SpiceJet',
    flightNumber: 'SG456',
    origin: 'Chennai',
    destination: 'Kolkata',
    departureTime: '09:30',
    arrivalTime: '11:45',
    price: 140,
    class: 'Economy',
    availableSeats: 28
  },
  {
    id: 'flight-5',
    airline: 'Air Asia',
    flightNumber: 'I5789',
    origin: 'Bangalore',
    destination: 'Hyderabad',
    departureTime: '13:15',
    arrivalTime: '14:30',
    price: 90,
    class: 'Economy',
    availableSeats: 35
  },
  {
    id: 'flight-6',
    airline: 'Go First',
    flightNumber: 'G8234',
    origin: 'Mumbai',
    destination: 'Jaipur',
    departureTime: '16:45',
    arrivalTime: '18:30',
    price: 110,
    class: 'Economy',
    availableSeats: 42
  },
  {
    id: 'flight-7',
    airline: 'Vistara',
    flightNumber: 'UK567',
    origin: 'Delhi',
    destination: 'Chennai',
    departureTime: '07:00',
    arrivalTime: '09:45',
    price: 165,
    class: 'Business',
    availableSeats: 15
  },
  {
    id: 'flight-8',
    airline: 'Air India',
    flightNumber: 'AI890',
    origin: 'Kolkata',
    destination: 'Bangalore',
    departureTime: '19:30',
    arrivalTime: '22:00',
    price: 145,
    class: 'Economy',
    availableSeats: 38
  }
];