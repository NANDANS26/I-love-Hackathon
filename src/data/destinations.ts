import { Destination } from '../types';

export const popularDestinations: Destination[] = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with pristine beaches, ancient temples, and vibrant culture.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.8,
    ecoCertified: true,
    location: {
      address: 'Bali, Indonesia',
      coordinates: { lat: -8.3405, lng: 115.0920 },
      nearestAirport: 'Ngurah Rai International Airport'
    },
    bestTimeToVisit: 'April to October',
    timings: 'Open all year',
    entryFee: {
      indian: 500000,
      foreign: 500000,
      currency: 'IDR'
    },
    features: ['Beaches', 'Temples', 'Rice Terraces'],
    nearbyAttractions: ['Ubud', 'Seminyak', 'Nusa Dua'],
    transportation: {
      taxi: true,
      bus: true,
      train: false
    }
  },
  {
    id: '2',
    name: 'Dubai, UAE',
    description: 'Ultra-modern architecture, luxury shopping, and desert adventures in one stunning city.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Dubai, United Arab Emirates',
      coordinates: { lat: 25.2048, lng: 55.2708 },
      nearestAirport: 'Dubai International Airport'
    },
    bestTimeToVisit: 'November to March',
    timings: 'Open all year',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'AED'
    },
    features: [
      'Burj Khalifa',
      'Desert Safaris',
      'Luxury Shopping',
      'Palm Islands'
    ],
    nearbyAttractions: [
      'Dubai Mall',
      'Burj Al Arab',
      'Dubai Marina',
      'Gold Souk'
    ],
    transportation: {
      taxi: true,
      bus: true,
      train: true
    }
  },
  {
    id: '3',
    name: 'Machu Picchu, Peru',
    description: 'Ancient Incan citadel set high in the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Machu Picchu, Peru',
      coordinates: { lat: -13.1631, lng: -72.5450 },
      nearestAirport: 'Alejandro Velasco Astete International Airport'
    },
    bestTimeToVisit: 'April to October',
    timings: '6:00 AM - 5:30 PM',
    entryFee: {
      indian: 152,
      foreign: 152,
      currency: 'PEN'
    },
    features: ['Ancient Ruins', 'Mountain Views', 'Hiking Trails'],
    nearbyAttractions: ['Sacred Valley', 'Cusco', 'Rainbow Mountain'],
    transportation: {
      train: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: '4',
    name: 'Kyoto, Japan',
    description: "Japan's cultural heart with ancient temples and gardens.",
    image: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4',
    rating: 4.7,
    ecoCertified: true,
    location: {
      address: 'Kyoto, Japan',
      coordinates: { lat: 35.0116, lng: 135.7681 },
      nearestAirport: 'Kansai International Airport'
    },
    bestTimeToVisit: 'March to May and October to November',
    timings: 'Varies by attraction',
    entryFee: {
      indian: 1000,
      foreign: 1000,
      currency: 'JPY'
    },
    features: ['Temples', 'Gardens', 'Traditional Culture'],
    nearbyAttractions: ['Fushimi Inari', 'Kinkaku-ji', 'Arashiyama'],
    transportation: {
      train: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: '5',
    name: 'Swiss Alps',
    description: 'Majestic mountain peaks, pristine lakes, and world-class skiing.',
    image: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb',
    rating: 4.8,
    ecoCertified: true,
    location: {
      address: 'Swiss Alps, Switzerland',
      coordinates: { lat: 46.8182, lng: 8.2275 },
      nearestAirport: 'Zurich Airport'
    },
    bestTimeToVisit: 'December to March for skiing, June to September for hiking',
    timings: 'Open all year',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'CHF'
    },
    features: ['Skiing', 'Hiking', 'Mountain Views'],
    nearbyAttractions: ['Zermatt', 'Interlaken', 'Lucerne'],
    transportation: {
      train: true,
      bus: true,
      taxi: true
    }
  },
  {
    id: '6',
    name: 'Maldives',
    description: 'Crystal clear waters, overwater bungalows, and marine life.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Maldives Islands',
      coordinates: { lat: 3.2028, lng: 73.2207 },
      nearestAirport: 'Velana International Airport'
    },
    bestTimeToVisit: 'November to April',
    timings: 'Open all year',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'USD'
    },
    features: ['Beaches', 'Water Sports', 'Luxury Resorts'],
    nearbyAttractions: ['Male', 'Maafushi', 'Hulhumale'],
    transportation: {
      taxi: true,
      bus: false,
      train: false
    }
  },
  {
    id: '7',
    name: 'Petra, Jordan',
    description: 'Ancient city carved into rose-colored rock faces.',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Petra, Jordan',
      coordinates: { lat: 30.3285, lng: 35.4444 },
      nearestAirport: 'King Hussein International Airport'
    },
    bestTimeToVisit: 'March to May',
    timings: '6:00 AM - 6:00 PM',
    entryFee: {
      indian: 50,
      foreign: 50,
      currency: 'JOD'
    },
    features: ['Ancient Architecture', 'Desert Tours', 'Cultural Experience'],
    nearbyAttractions: ['The Treasury', 'Monastery', 'Royal Tombs'],
    transportation: {
      taxi: true,
      bus: true,
      train: false
    }
  },
  {
    id: '8',
    name: 'Cappadocia, Turkey',
    description: 'Famous for its hot air balloons and unique cave dwellings carved into soft rock formations.',
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&q=80',
    rating: 4.8,
    ecoCertified: true,
    location: {
      address: 'Cappadocia, Turkey',
      coordinates: { lat: 38.6431, lng: 34.8283 },
      nearestAirport: 'Nevşehir Kapadokya Airport'
    },
    bestTimeToVisit: 'April to June, September to November',
    timings: 'Open all year',
    entryFee: {
      indian: 100,
      foreign: 100,
      currency: 'TRY'
    },
    features: [
      'Hot Air Balloon Rides',
      'Cave Hotels',
      'Underground Cities',
      'Rock Churches',
      'Fairy Chimneys'
    ],
    nearbyAttractions: [
      'Göreme Open Air Museum',
      'Uçhisar Castle',
      'Red Valley',
      'Rose Valley',
      'Ihlara Valley'
    ],
    transportation: {
      taxi: true,
      bus: true,
      train: false
    }
  },
  {
    id: '10',
    name: 'Banff National Park, Canada',
    description: 'Pristine mountain landscapes with turquoise lakes and abundant wildlife.',
    image: 'https://images.unsplash.com/photo-1561134643-668f9057cce4',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Banff, Alberta, Canada',
      coordinates: { lat: 51.4968, lng: -115.9281 },
      nearestAirport: 'Calgary International Airport'
    },
    bestTimeToVisit: 'June to August, December to March',
    timings: 'Open all year',
    entryFee: {
      indian: 10,
      foreign: 10,
      currency: 'CAD'
    },
    features: ['Hiking Trails', 'Ski Resorts', 'Hot Springs', 'Wildlife Viewing'],
    nearbyAttractions: ['Lake Louise', 'Moraine Lake', 'Sulphur Mountain', 'Johnston Canyon'],
    transportation: {
      taxi: true,
      bus: true,
      train: true
    }
  },
  {
    id: '11',
    name: 'Northern Lights, Iceland',
    description: 'Natural light display in Earth\'s sky.',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Reykjavik, Iceland',
      coordinates: { lat: 64.1466, lng: -21.9426 },
      nearestAirport: 'Keflavík International Airport'
    },
    bestTimeToVisit: 'September to March',
    timings: 'Best viewed at night',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'ISK'
    },
    features: ['Aurora Viewing', 'Hot Springs', 'Glacier Tours'],
    nearbyAttractions: ['Blue Lagoon', 'Golden Circle', 'Vatnajökull'],
    transportation: {
      bus: true,
      car: true,
      taxi: true
    }
  },
  {
    id: '12',
    name: 'Amalfi Coast, Italy',
    description: 'Dramatic coastline with colorful villages, cliffside hotels, and Mediterranean charm.',
    image: 'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b',
    rating: 4.8,
    ecoCertified: true,
    location: {
      address: 'Amalfi Coast, Italy',
      coordinates: { lat: 40.6333, lng: 14.6029 },
      nearestAirport: 'Naples International Airport'
    },
    bestTimeToVisit: 'May to October',
    timings: 'Open all year',
    entryFee: {
      indian: 0,
      foreign: 0,
      currency: 'EUR'
    },
    features: [
      'Coastal Views',
      'Historic Towns',
      'Mediterranean Beaches',
      'Italian Cuisine'
    ],
    nearbyAttractions: [
      'Positano',
      'Ravello',
      'Capri Island',
      'Path of the Gods'
    ],
    transportation: {
      taxi: true,
      bus: true,
      train: true
    }
  },
  {
    id: '13',
    name: 'Great Wall, China',
    description: 'Ancient wonder stretching thousands of miles across China\'s landscape.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    rating: 4.9,
    ecoCertified: true,
    location: {
      address: 'Mutianyu, Beijing, China',
      coordinates: { lat: 40.4319, lng: 116.5704 },
      nearestAirport: 'Beijing Capital International Airport'
    },
    bestTimeToVisit: 'March to May, September to November',
    timings: '7:30 AM - 5:30 PM',
    entryFee: {
      indian: 45,
      foreign: 45,
      currency: 'CNY'
    },
    features: [
      'Ancient Architecture',
      'Mountain Views',
      'Historical Tours',
      'Cable Car Rides'
    ],
    nearbyAttractions: [
      'Forbidden City',
      'Summer Palace',
      'Temple of Heaven',
      'Ming Tombs'
    ],
    transportation: {
      taxi: true,
      bus: true,
      train: true
    }
  }
];