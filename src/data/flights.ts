import { Flight } from '../types/transport';

export const flights: Flight[] = [
  // Domestic Flights
  {
    id: 'flight-1',
    airline: 'Air India',
    flightNumber: 'AI302',
    origin: 'Mumbai',
    destination: 'Delhi',
    departureTime: '10:00',
    arrivalTime: '12:00',
    price: 8500,
    class: 'Economy',
    availableSeats: 45,
    type: 'indian'
  },
  {
    id: 'flight-2',
    airline: 'IndiGo',
    flightNumber: 'IN205',
    origin: 'Bangalore',
    destination: 'Mumbai',
    departureTime: '14:30',
    arrivalTime: '16:15',
    price: 6800,
    class: 'Economy',
    availableSeats: 32,
    type: 'indian'
  },
  {
    id: 'flight-3',
    airline: 'SpiceJet',
    flightNumber: 'SG721',
    origin: 'Delhi',
    destination: 'Bangalore',
    departureTime: '08:15',
    arrivalTime: '11:00',
    price: 7500,
    class: 'Economy',
    availableSeats: 38,
    type: 'indian'
  },
  {
    id: 'flight-4',
    airline: 'Vistara',
    flightNumber: 'VS404',
    origin: 'Chennai',
    destination: 'Delhi',
    departureTime: '11:30',
    arrivalTime: '14:15',
    price: 9200,
    class: 'Premium Economy',
    availableSeats: 28,
    type: 'indian'
  },
  {
    id: 'flight-5',
    airline: 'Air India',
    flightNumber: 'AI505',
    origin: 'Kolkata',
    destination: 'Mumbai',
    departureTime: '16:45',
    arrivalTime: '19:30',
    price: 8900,
    class: 'Economy',
    availableSeats: 42,
    type: 'indian'
  },
  // International Flights
  {
    id: 'flight-6',
    airline: 'Emirates',
    flightNumber: 'EK507',
    origin: 'Mumbai',
    destination: 'Dubai',
    departureTime: '04:30',
    arrivalTime: '06:15',
    price: 35000,
    class: 'Economy',
    availableSeats: 52,
    type: 'international'
  },
  {
    id: 'flight-7',
    airline: 'Lufthansa',
    flightNumber: 'LH755',
    origin: 'Delhi',
    destination: 'Frankfurt',
    departureTime: '03:45',
    arrivalTime: '08:30',
    price: 48000,
    class: 'Economy',
    availableSeats: 45,
    type: 'international'
  },
  {
    id: 'flight-8',
    airline: 'Singapore Airlines',
    flightNumber: 'SQ423',
    origin: 'Bangalore',
    destination: 'Singapore',
    departureTime: '23:15',
    arrivalTime: '06:45',
    price: 42000,
    class: 'Economy',
    availableSeats: 48,
    type: 'international'
  },
  {
    id: 'flight-9',
    airline: 'British Airways',
    flightNumber: 'BA138',
    origin: 'Mumbai',
    destination: 'London',
    departureTime: '02:30',
    arrivalTime: '07:45',
    price: 52000,
    class: 'Economy',
    availableSeats: 40,
    type: 'international'
  },
  {
    id: 'flight-10',
    airline: 'Air France',
    flightNumber: 'AF217',
    origin: 'Delhi',
    destination: 'Paris',
    departureTime: '22:15',
    arrivalTime: '04:30',
    price: 49000,
    class: 'Economy',
    availableSeats: 44,
    type: 'international'
  }
];