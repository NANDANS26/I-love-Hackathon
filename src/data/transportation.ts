import { Transport } from '../types/transport';

export const transportation: Transport[] = [
  {
    id: 'trans-1',
    type: 'train',
    name: 'Rajdhani Express',
    route: 'Mumbai to Delhi',
    departureTime: '16:00',
    arrivalTime: '08:00',
    price: 80,
    class: '1st AC'
  },
  {
    id: 'trans-2',
    type: 'train',
    name: 'Shatabdi Express',
    route: 'Delhi to Jaipur',
    departureTime: '06:00',
    arrivalTime: '10:30',
    price: 60,
    class: 'Executive Chair Car'
  },
  {
    id: 'trans-3',
    type: 'train',
    name: 'Duronto Express',
    route: 'Bangalore to Chennai',
    departureTime: '20:00',
    arrivalTime: '06:00',
    price: 70,
    class: '2nd AC'
  },
  {
    id: 'trans-4',
    type: 'cab',
    name: 'City Cab Service',
    route: 'Mumbai Airport to City Center',
    price: 30,
    vehicleType: 'SUV',
    seatingCapacity: 4
  },
  {
    id: 'trans-5',
    type: 'cab',
    name: 'Premium Taxi',
    route: 'Delhi Airport to Noida',
    price: 35,
    vehicleType: 'Sedan',
    seatingCapacity: 4
  },
  {
    id: 'trans-6',
    type: 'cab',
    name: 'Airport Transfer',
    route: 'Bangalore Airport to Electronic City',
    price: 40,
    vehicleType: 'SUV',
    seatingCapacity: 6
  },
  {
    id: 'trans-7',
    type: 'train',
    name: 'Vande Bharat Express',
    route: 'Chennai to Mysore',
    departureTime: '08:00',
    arrivalTime: '14:00',
    price: 75,
    class: 'Executive Chair Car'
  },
  {
    id: 'trans-8',
    type: 'cab',
    name: 'City Connect',
    route: 'Chennai Central to OMR',
    price: 25,
    vehicleType: 'Sedan',
    seatingCapacity: 4
  }
];