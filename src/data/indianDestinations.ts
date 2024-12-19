import { Destination } from '../types';
import earthImage from '../assets/earth-landmarks.png';

export const indianDestinations: Destination[] = [
  {
    id: 'india-1',
    name: 'Taj Mahal, Agra',
    description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna, symbol of eternal love.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Agra, Uttar Pradesh',
      coordinates: { lat: 27.1751, lng: 78.0421 },
      nearestAirport: 'Agra Airport (AGR)'
    },
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: 50,
      foreign: 1100,
      currency: 'INR'
    },
    timings: '6:00 AM - 6:30 PM (Closed on Fridays)',
    features: [
      'UNESCO World Heritage Site',
      'Guided Tours Available',
      'Best at Sunrise',
      'Cultural Experience'
    ],
    nearbyAttractions: [
      'Agra Fort',
      'Fatehpur Sikri',
      'Mehtab Bagh'
    ],
    transportation: {
      train: true,
      bus: true,
      taxi: true,
      metro: false
    }
  },
  {
    id: 'india-2',
    name: 'Varanasi Ghats',
    description: 'Ancient spiritual city with sacred ghats along the Ganges River.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    rating: 4.7,
    ecoCertified: true,
    location: {
      address: 'Varanasi, Uttar Pradesh',
      coordinates: { lat: 25.3176, lng: 83.0062 },
      nearestAirport: 'Lal Bahadur Shastri Airport (VNS)'
    },
    bestTimeToVisit: 'November to March',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'INR'
    },
    timings: 'Open 24 hours',
    features: [
      'Spiritual Ceremonies',
      'Boat Rides',
      'Ancient Temples',
      'Cultural Immersion'
    ],
    nearbyAttractions: [
      'Sarnath',
      'Kashi Vishwanath Temple',
      'Ramnagar Fort'
    ],
    transportation: {
      train: true,
      bus: true,
      taxi: true,
      metro: false
    }
  },
  {
    id: 'india-3',
    name: 'Jaipur City Palace',
    description: 'A stunning blend of Rajasthani and Mughal architecture in the Pink City.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    rating: 4.8,
    ecoCertified: true,
    location: {
      address: 'Jaipur, Rajasthan',
      coordinates: { lat: 26.9255, lng: 75.8236 },
      nearestAirport: 'Jaipur International Airport (JAI)'
    },
    bestTimeToVisit: 'October to March',
    entryFee: {
      indian: 200,
      foreign: 700,
      currency: 'INR'
    },
    timings: '9:30 AM - 5:00 PM',
    features: [
      'Royal Architecture',
      'Museum',
      'Light & Sound Show',
      'Guided Tours'
    ],
    nearbyAttractions: [
      'Hawa Mahal',
      'Amber Fort',
      'Jantar Mantar'
    ],
    transportation: {
      train: true,
      bus: true,
      taxi: true,
      metro: true
    }
  },
  {
    id: 'india-4',
    name: 'Goa Beaches',
    description: 'Beautiful coastline with pristine beaches and vibrant nightlife.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    rating: 4.6,
    ecoCertified: true,
    location: {
      address: 'North Goa',
      coordinates: { lat: 15.4989, lng: 73.8278 },
      nearestAirport: 'Goa International Airport (GOI)'
    },
    bestTimeToVisit: 'November to February',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'INR'
    },
    timings: 'Open 24 hours',
    features: [
      'Water Sports',
      'Beach Shacks',
      'Nightlife',
      'Portuguese Architecture'
    ],
    nearbyAttractions: [
      'Fort Aguada',
      'Basilica of Bom Jesus',
      'Dudhsagar Falls'
    ],
    transportation: {
      train: true,
      bus: true,
      taxi: true,
      metro: false
    }
  },
  {
    id: 'india-5',
    name: 'Munnar Tea Gardens',
    description: 'Rolling hills covered with emerald-green tea plantations.',
    image: 'https://images.unsplash.com/photo-1598418606132-8a61d4f68950',
    rating: 4.7,
    ecoCertified: true,
    location: {
      address: 'Munnar, Kerala',
      coordinates: { lat: 10.0889, lng: 77.0595 },
      nearestAirport: 'Cochin International Airport (COK)'
    },
    bestTimeToVisit: 'September to March',
    entryFee: {
      indian: 100,
      foreign: 200,
      currency: 'INR'
    },
    timings: '9:00 AM - 4:00 PM',
    features: [
      'Tea Plantations',
      'Mountain Views',
      'Tea Factory Tours',
      'Trekking'
    ],
    nearbyAttractions: [
      'Eravikulam National Park',
      'Top Station',
      'Mattupetty Dam'
    ],
    transportation: {
      train: false,
      bus: true,
      taxi: true,
      metro: false
    }
  }
];