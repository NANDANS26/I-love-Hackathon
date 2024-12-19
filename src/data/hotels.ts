import { Hotel } from '../types';

export const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'The Ritz-Carlton',
    description: 'Luxury hotel with stunning views and world-class amenities.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    rating: 4.9,
    pricePerNight: 450,
    location: 'Mumbai, India',
    amenities: [
      'Spa',
      'Pool',
      'Fine Dining',
      'Gym',
      'Business Center'
    ],
    ecoCertified: true
  },
  {
    id: 'hotel-2',
    name: 'Taj Lake Palace',
    description: 'Historic luxury hotel floating on Lake Pichola.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    rating: 4.8,
    pricePerNight: 550,
    location: 'Udaipur, India',
    amenities: [
      'Heritage Tours',
      'Spa',
      'Royal Dining',
      'Boat Rides'
    ],
    ecoCertified: true
  },
  {
    id: 'hotel-3',
    name: 'The Oberoi',
    description: 'Contemporary luxury with traditional Indian hospitality.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    rating: 4.7,
    pricePerNight: 350,
    location: 'New Delhi, India',
    amenities: [
      'Airport Transfer',
      'Spa',
      'Multiple Restaurants',
      '24/7 Service'
    ],
    ecoCertified: false
  }
];