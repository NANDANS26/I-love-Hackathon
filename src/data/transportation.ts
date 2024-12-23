import { Transport } from '../types/transport';

export const transportation: Transport[] = [
  // Trains
  {
    id: 'train-1',
    type: 'train',
    name: 'Rajdhani Express',
    route: 'Mumbai to Delhi',
    departureTime: '16:00',
    arrivalTime: '08:00',
    price: 3500,
    class: '1st AC',
    availableSeats: 48
  },
  {
    id: 'train-2',
    type: 'train',
    name: 'Shatabdi Express',
    route: 'Delhi to Jaipur',
    departureTime: '06:00',
    arrivalTime: '10:30',
    price: 2200,
    class: 'Executive Chair Car',
    availableSeats: 52
  },
  {
    id: 'train-3',
    type: 'train',
    name: 'Duronto Express',
    route: 'Mumbai to Bangalore',
    departureTime: '20:15',
    arrivalTime: '18:45',
    price: 4200,
    class: '2nd AC',
    availableSeats: 65
  },
  {
    id: 'train-4',
    type: 'train',
    name: 'Gatimaan Express',
    route: 'Delhi to Agra',
    departureTime: '08:10',
    arrivalTime: '09:50',
    price: 1500,
    class: 'Executive Chair Car',
    availableSeats: 55
  },
  {
    id: 'train-5',
    type: 'train',
    name: 'Vande Bharat Express',
    route: 'Delhi to Varanasi',
    departureTime: '06:00',
    arrivalTime: '14:00',
    price: 2800,
    class: 'Executive Chair Car',
    availableSeats: 58
  },
  // Cabs
  {
    id: 'cab-1',
    type: 'cab',
    name: 'Premium SUV',
    route: 'Mumbai Airport to City Center',
    price: 1500,
    vehicleType: 'SUV',
    seatingCapacity: 6,
    amenities: ['AC', 'WiFi', 'Water Bottles']
  },
  {
    id: 'cab-2',
    type: 'cab',
    name: 'Sedan Comfort',
    route: 'Delhi Airport to Noida',
    price: 1200,
    vehicleType: 'Sedan',
    seatingCapacity: 4,
    amenities: ['AC', 'Music System']
  },
  {
    id: 'cab-3',
    type: 'cab',
    name: 'Electric Premium',
    route: 'Bangalore Airport to Electronic City',
    price: 1800,
    vehicleType: 'Electric SUV',
    seatingCapacity: 4,
    amenities: ['AC', 'WiFi', 'Entertainment System']
  },
  {
    id: 'cab-4',
    type: 'cab',
    name: 'Luxury Sedan',
    route: 'Chennai Airport to OMR',
    price: 1400,
    vehicleType: 'Luxury Sedan',
    seatingCapacity: 4,
    amenities: ['AC', 'WiFi', 'Premium Interior']
  },
  {
    id: 'cab-5',
    type: 'cab',
    name: 'Mini Economy',
    route: 'Pune Airport to City Center',
    price: 800,
    vehicleType: 'Hatchback',
    seatingCapacity: 4,
    amenities: ['AC']
  }
];