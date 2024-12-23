import { TrendingPlaceDetails } from '../types/trendingPlaces';

export const trendingPlacesData: Record<string, TrendingPlaceDetails> = {
  'trend-1': {
    name: 'Taj Mahal',
    description: 'One of the Seven Wonders of the World, a symbol of eternal love.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    rating: 4.9,
    location: {
      coordinates: { lat: 27.1751, lng: 78.0421 },
      address: 'Agra, Uttar Pradesh',
      nearestAirport: 'Agra Airport (AGR)',
      nearestRailway: 'Agra Cantt Railway Station'
    },
    trending: {
      rank: 1,
      searchVolume: 25000,
      growthRate: 30,
      category: 'Heritage'
    },
    details: {
      entryFee: {
        indian: 50,
        foreign: 1100
      },
      timings: '6:00 AM - 6:30 PM (Closed on Fridays)',
      bestTimeToVisit: 'October to March',
      averageTimeRequired: '2-3 hours',
      photography: 'Allowed (Additional fee for professional cameras)',
      guidedTours: 'Available in multiple languages'
    },
    attractions: [
      'Main Mausoleum',
      'Mosque',
      'Gardens',
      'Museum'
    ],
    activities: [
      'Sunrise View',
      'Photography',
      'Guided Tours',
      'Cultural Performances'
    ]
  },
  'trend-2': {
    name: 'Varanasi Ghats',
    description: 'Ancient spiritual city with sacred ghats along the Ganges River.',
    image: 'https://images.unsplash.com/photo-1706186829065-ede677efe384?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    location: {
      coordinates: { lat: 25.3176, lng: 83.0062 },
      address: 'Varanasi, Uttar Pradesh',
      nearestAirport: 'Lal Bahadur Shastri Airport (VNS)',
      nearestRailway: 'Varanasi Junction'
    },
    trending: {
      rank: 2,
      searchVolume: 18000,
      growthRate: 25,
      category: 'Spiritual'
    },
    details: {
      entryFee: {
        indian: 0,
        foreign: 0
      },
      timings: 'Open 24 hours',
      bestTimeToVisit: 'November to March',
      averageTimeRequired: '2-3 days',
      photography: 'Allowed',
      guidedTours: 'Available in multiple languages'
    },
    attractions: [
      'Dashashwamedh Ghat',
      'Manikarnika Ghat',
      'Assi Ghat',
      'Evening Aarti Ceremony'
    ],
    activities: [
      'Boat Rides',
      'Morning Yoga',
      'Temple Visits',
      'Spiritual Ceremonies'
    ]
  },
  'trend-3': {
    name: 'Jaipur City Palace',
    description: 'A stunning blend of Rajasthani and Mughal architecture in the Pink City.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    rating: 4.8,
    location: {
      coordinates: { lat: 26.9255, lng: 75.8236 },
      address: 'Jaipur, Rajasthan',
      nearestAirport: 'Jaipur International Airport (JAI)',
      nearestRailway: 'Jaipur Junction'
    },
    trending: {
      rank: 3,
      searchVolume: 15000,
      growthRate: 22,
      category: 'Heritage'
    },
    details: {
      entryFee: {
        indian: 200,
        foreign: 700
      },
      timings: '9:30 AM - 5:00 PM',
      bestTimeToVisit: 'October to March',
      averageTimeRequired: '4-5 hours',
      photography: 'Allowed (Additional fee for professional cameras)',
      guidedTours: 'Available in multiple languages'
    },
    attractions: [
      'Chandra Mahal',
      'Mubarak Mahal',
      'Diwan-i-Khas',
      'Royal Courtyard'
    ],
    activities: [
      'Palace Tours',
      'Museum Visits',
      'Cultural Shows',
      'Royal Garden Walks'
    ]
  },
  'trend-4': {
    name: 'Hampi',
    description: 'Ancient ruins and boulder-strewn landscape of the Vijayanagara Empire.',
    image: 'https://plus.unsplash.com/premium_photo-1697729472950-e041cd81b72f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    location: {
      coordinates: { lat: 15.3350, lng: 76.4600 },
      address: 'Hampi, Karnataka',
      nearestAirport: 'Hubli Airport (HBX)',
      nearestRailway: 'Hospet Junction'
    },
    trending: {
      rank: 4,
      searchVolume: 12000,
      growthRate: 20,
      category: 'Historical'
    },
    details: {
      entryFee: {
        indian: 40,
        foreign: 600
      },
      timings: 'Sunrise to Sunset',
      bestTimeToVisit: 'October to March',
      averageTimeRequired: '2-3 days',
      photography: 'Allowed',
      guidedTours: 'Available'
    },
    attractions: [
      'Virupaksha Temple',
      'Vittala Temple',
      'Elephant Stables',
      'Lotus Mahal'
    ],
    activities: [
      'Rock Climbing',
      'Coracle Rides',
      'Cycling Tours',
      'Archaeological Walks'
    ]
  },
  'trend-5': {
    name: 'Valley of Flowers',
    description: 'UNESCO World Heritage site with endemic alpine flowers.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
    rating: 4.9,
    location: {
      coordinates: { lat: 30.7283, lng: 79.6058 },
      address: 'Chamoli District, Uttarakhand',
      nearestAirport: 'Jolly Grant Airport, Dehradun',
      nearestRailway: 'Rishikesh Railway Station'
    },
    trending: {
      rank: 5,
      searchVolume: 10000,
      growthRate: 28,
      category: 'Nature'
    },
    details: {
      entryFee: {
        indian: 150,
        foreign: 600
      },
      timings: '7:00 AM - 5:00 PM',
      bestTimeToVisit: 'July to September',
      averageTimeRequired: '2-3 days',
      photography: 'Allowed',
      guidedTours: 'Available with local guides'
    },
    attractions: [
      'Alpine Meadows',
      'Rare Flowers',
      'Hemkund Sahib',
      'Glacial Valleys'
    ],
    activities: [
      'Trekking',
      'Nature Photography',
      'Bird Watching',
      'Camping'
    ]
  },
  'trend-6': {
    name: 'Rann of Kutch',
    description: 'Vast white salt desert under starlit skies.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
    rating: 4.6,
    location: {
      coordinates: { lat: 23.8361, lng: 69.8401 },
      address: 'Kutch, Gujarat',
      nearestAirport: 'Bhuj Airport',
      nearestRailway: 'Bhuj Railway Station'
    },
    trending: {
      rank: 6,
      searchVolume: 9000,
      growthRate: 18,
      category: 'Nature'
    },
    details: {
      entryFee: {
        indian: 100,
        foreign: 400
      },
      timings: 'Sunrise to Sunset',
      bestTimeToVisit: 'November to February',
      averageTimeRequired: '2-3 days',
      photography: 'Allowed',
      guidedTours: 'Available with local guides'
    },
    attractions: [
      'White Salt Desert',
      'Kalo Dungar',
      'Kutch Desert Wildlife Sanctuary',
      'Traditional Villages'
    ],
    activities: [
      'Desert Safari',
      'Stargazing',
      'Cultural Tours',
      'Handicraft Shopping'
    ]
  }
};