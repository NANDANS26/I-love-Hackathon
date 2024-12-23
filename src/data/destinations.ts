import { Destination } from '../types';

export const popularDestinations: Destination[] = [
  {
    id: 'dest-1',
    name: 'Eiffel Tower',
    description: 'Iconic iron lattice tower and a global symbol of Paris, offering breathtaking city views.',
    image: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    ecoCertified: true,
    features: ['Observation Decks', 'Fine Dining', 'Night Light Show', 'Guided Tours'],
    nearbyAttractions: ['Louvre Museum', 'Arc de Triomphe', 'Seine River', 'Champs-Élysées'],
    location: {
      address: 'Champ de Mars, Paris, France',
      coordinates: { lat: 48.8584, lng: 2.2945 },
      nearestAirport: 'Charles de Gaulle Airport'
    },
    bestTimeToVisit: 'June to September',
    timings: '9:00 AM - 12:45 AM',
    entryFee: {
      indian: 1800,
      foreign: 1800,
      currency: 'EUR'
    },
    transportation: {
      metro: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: 'dest-2',
    name: 'Machu Picchu',
    description: 'Ancient Incan city set high in the Andes Mountains, a UNESCO World Heritage site.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    rating: 4.9,
    ecoCertified: true,
    features: ['Archaeological Site', 'Mountain Hiking', 'Cultural Tours', 'Inca Trail'],
    nearbyAttractions: ['Sacred Valley', 'Cusco', 'Rainbow Mountain', 'Huayna Picchu'],
    location: {
      address: 'Cusco Region, Peru',
      coordinates: { lat: -13.1631, lng: -72.5450 },
      nearestAirport: 'Alejandro Velasco Astete Airport'
    },
    bestTimeToVisit: 'April to October',
    timings: '6:00 AM - 5:30 PM',
    entryFee: {
      indian: 2000,
      foreign: 2000,
      currency: 'PEN'
    },
    transportation: {
      train: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: 'dest-3',
    name: 'Santorini',
    description: 'Stunning volcanic island with white-washed buildings and spectacular sunsets.',
    image: 'https://images.unsplash.com/photo-1570077188670-6a96fdf1a3b4',
    rating: 4.8,
    ecoCertified: true,
    features: ['Sunset Views', 'Wine Tasting', 'Beach Activities', 'Island Tours'],
    nearbyAttractions: ['Oia', 'Red Beach', 'Akrotiri', 'Fira'],
    location: {
      address: 'Santorini, Greece',
      coordinates: { lat: 36.3932, lng: 25.4615 },
      nearestAirport: 'Santorini International Airport'
    },
    bestTimeToVisit: 'April to October',
    timings: 'Open 24 hours',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'EUR'
    },
    transportation: {
      ferry: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: 'dest-4',
    name: 'Great Barrier Reef',
    description: 'World\'s largest coral reef system, offering incredible marine life experiences.',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0',
    rating: 4.9,
    ecoCertified: true,
    features: ['Snorkeling', 'Scuba Diving', 'Glass Bottom Boats', 'Marine Life'],
    nearbyAttractions: ['Whitsunday Islands', 'Cairns', 'Port Douglas', 'Hamilton Island'],
    location: {
      address: 'Queensland, Australia',
      coordinates: { lat: -18.2871, lng: 147.6992 },
      nearestAirport: 'Cairns Airport'
    },
    bestTimeToVisit: 'June to October',
    timings: 'Daylight hours',
    entryFee: {
      indian: 200,
      foreign: 200,
      currency: 'AUD'
    },
    transportation: {
      boat: true,
      seaplane: true
    }
  },
  {
    id: 'dest-5',
    name: 'Mount Fuji',
    description: 'Japan\'s highest mountain and most iconic natural landmark.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    rating: 4.8,
    ecoCertified: true,
    features: ['Mountain Climbing', 'Photography', 'Cultural Sites', 'Hot Springs'],
    nearbyAttractions: ['Chureito Pagoda', 'Lake Kawaguchiko', 'Aokigahara Forest'],
    location: {
      address: 'Honshu, Japan',
      coordinates: { lat: 35.3606, lng: 138.7274 },
      nearestAirport: 'Haneda Airport'
    },
    bestTimeToVisit: 'July to August',
    timings: 'Climbing season: July to early September',
    entryFee: {
      indian: 1000,
      foreign: 1000,
      currency: 'JPY'
    },
    transportation: {
      train: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: 'dest-6',
    name: 'Petra',
    description: 'Ancient city carved into rose-colored rock faces, a UNESCO World Heritage site.',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3',
    rating: 4.9,
    ecoCertified: true,
    features: ['Archaeological Site', 'Guided Tours', 'Night Tours', 'Bedouin Culture'],
    nearbyAttractions: ['The Treasury', 'Monastery', 'Royal Tombs', 'Siq'],
    location: {
      address: 'Ma\'an Governorate, Jordan',
      coordinates: { lat: 30.3285, lng: 35.4444 },
      nearestAirport: 'King Hussein International Airport'
    },
    bestTimeToVisit: 'March to May, September to November',
    timings: '6:00 AM - 6:00 PM',
    entryFee: {
      indian: 90,
      foreign: 90,
      currency: 'JOD'
    },
    transportation: {
      bus: true,
      taxi: true
    }
  }
];