import { Country } from '../types/destinations';

const japanPlaces = [
  {
    id: 'jp-1',
    name: 'Mount Fuji',
    description: 'Japan\'s highest mountain and most iconic natural landmark.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    location: {
      address: 'Mount Fuji, Shizuoka Prefecture, Japan',
      coordinates: { lat: 35.3606, lng: 138.7274 }
    },
    rating: 4.9,
    bestTimeToVisit: 'July to early September',
    thingsToSee: [
      'Summit Views',
      'Five Lakes Region',
      'Chureito Pagoda',
      'Sengen Shrine'
    ],
    activities: [
      'Mountain Climbing',
      'Photography',
      'Hiking',
      'Cultural Tours'
    ],
    estimatedCost: { currency: 'JPY', min: 5000, max: 15000 },
    openingHours: {
      weekdays: '24/7 during climbing season',
      weekends: '24/7 during climbing season',
      holidays: '24/7 during climbing season'
    },
    accessibility: {
      wheelchairAccessible: false,
      publicTransport: true,
      parking: true
    },
    guidedTours: {
      available: true,
      languages: ['Japanese', 'English', 'Chinese'],
      duration: '1-2 days'
    }
  },
  {
    id: 'jp-2',
    name: 'Fushimi Inari Shrine',
    description: 'Famous for its thousands of vermillion torii gates.',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36',
    location: {
      address: 'Kyoto, Japan',
      coordinates: { lat: 34.9671, lng: 135.7726 }
    },
    rating: 4.8,
    bestTimeToVisit: 'March to May or October to November',
    thingsToSee: [
      'Torii Gate Tunnels',
      'Mountain Trails',
      'Sacred Fox Statues',
      'Sub-shrines'
    ],
    activities: [
      'Shrine Visits',
      'Hiking',
      'Photography',
      'Traditional Ceremonies'
    ],
    estimatedCost: { currency: 'JPY', min: 0, max: 5000 },
    openingHours: {
      weekdays: '24/7',
      weekends: '24/7'
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransport: true,
      parking: true
    }
  },
  {
    id: 'jp-3',
    name: 'Arashiyama Bamboo Grove',
    description: 'Enchanting bamboo forest and cultural district.',
    image: 'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216',
    location: {
      address: 'Arashiyama, Kyoto, Japan',
      coordinates: { lat: 35.0094, lng: 135.6737 }
    },
    rating: 4.7,
    bestTimeToVisit: 'Early morning or late afternoon',
    thingsToSee: [
      'Bamboo Forest',
      'Tenryu-ji Temple',
      'Monkey Park',
      'Traditional Streets'
    ],
    activities: [
      'Walking Tours',
      'Photography',
      'Temple Visits',
      'Rickshaw Rides'
    ],
    estimatedCost: { currency: 'JPY', min: 500, max: 3000 }
  },
  {
    id: 'jp-4',
    name: 'Sensoji Temple',
    description: 'Tokyo\'s oldest and most significant Buddhist temple.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    location: {
      address: 'Asakusa, Tokyo, Japan',
      coordinates: { lat: 35.7147, lng: 139.7966 }
    },
    rating: 4.7,
    bestTimeToVisit: 'Early morning or evening',
    thingsToSee: [
      'Kaminarimon Gate',
      'Nakamise Shopping Street',
      'Five-Story Pagoda',
      'Main Hall'
    ],
    activities: [
      'Temple Visits',
      'Shopping',
      'Fortune Telling',
      'Traditional Snacks'
    ],
    estimatedCost: { currency: 'JPY', min: 0, max: 1000 }
  }
];

const francePlaces = [
  {
    id: 'fr-1',
    name: 'Eiffel Tower',
    description: 'Iconic iron lattice tower on the Champ de Mars.',
    image: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: {
      address: 'Champ de Mars, Paris, France',
      coordinates: { lat: 48.8584, lng: 2.2945 }
    },
    rating: 4.8,
    bestTimeToVisit: 'June to September',
    thingsToSee: [
      'Tower Summit',
      'Trocadéro Gardens',
      'Seine River Views',
      'Light Shows'
    ],
    activities: [
      'Tower Ascent',
      'Fine Dining',
      'Photography',
      'Evening Light Show'
    ],
    estimatedCost: { currency: 'EUR', min: 26, max: 60 }
  },
  {
    id: 'fr-2',
    name: 'Palace of Versailles',
    description: 'Opulent royal château and gardens.',
    image: 'https://images.unsplash.com/photo-1591289009723-aef0a1a8a211',
    location: {
      address: 'Versailles, France',
      coordinates: { lat: 48.8048, lng: 2.1203 }
    },
    rating: 4.9,
    bestTimeToVisit: 'April to October',
    thingsToSee: [
      'Hall of Mirrors',
      'Royal Apartments',
      'Gardens',
      'Grand Canal'
    ],
    activities: [
      'Guided Tours',
      'Garden Walks',
      'Fountain Shows',
      'Museum Visits'
    ],
    estimatedCost: { currency: 'EUR', min: 18, max: 45 }
  },
  {
    id: 'fr-3',
    name: 'Mont Saint-Michel',
    description: 'Medieval monastery and village on a tidal island.',
    image: 'https://images.unsplash.com/photo-1596394723269-b2cbca4e6313',
    location: {
      address: 'Mont Saint-Michel, Normandy, France',
      coordinates: { lat: 48.6361, lng: -1.5115 }
    },
    rating: 4.8,
    bestTimeToVisit: 'May to October',
    thingsToSee: [
      'Abbey',
      'Medieval Village',
      'Ramparts',
      'Bay Views'
    ],
    activities: [
      'Abbey Tours',
      'Bay Walks',
      'Historical Visits',
      'Photography'
    ],
    estimatedCost: { currency: 'EUR', min: 10, max: 25 }
  },
  {
    id: 'fr-4',
    name: 'French Riviera',
    description: 'Glamorous Mediterranean coastline.',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
    location: {
      address: 'Nice, French Riviera, France',
      coordinates: { lat: 43.7102, lng: 7.2620 }
    },
    rating: 4.7,
    bestTimeToVisit: 'June to September',
    thingsToSee: [
      'Nice Promenade',
      'Monaco Casino',
      'Saint-Tropez Beaches',
      'Antibes Old Town'
    ],
    activities: [
      'Beach Activities',
      'Yacht Tours',
      'Casino Visits',
      'Coastal Walks'
    ],
    estimatedCost: { currency: 'EUR', min: 50, max: 200 }
  }
];

const italianPlaces = [
  {
    id: 'it-1',
    name: 'Colosseum',
    description: 'Ancient amphitheater in the heart of Rome.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    location: {
      address: 'Rome, Italy',
      coordinates: { lat: 41.8902, lng: 12.4922 }
    },
    rating: 4.9,
    bestTimeToVisit: 'April to May or September to October',
    thingsToSee: [
      'Arena Floor',
      'Underground Chambers',
      'Arch of Constantine',
      'Roman Forum'
    ],
    activities: [
      'Guided Tours',
      'Archaeological Visits',
      'Night Tours',
      'Photography'
    ],
    estimatedCost: { currency: 'EUR', min: 16, max: 45 }
  },
  {
    id: 'it-2',
    name: 'Venice Canals',
    description: 'Romantic waterways and historic architecture.',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
    location: {
      address: 'Venice, Italy',
      coordinates: { lat: 45.4408, lng: 12.3155 }
    },
    rating: 4.8,
    bestTimeToVisit: 'April to June',
    thingsToSee: [
      'Grand Canal',
      'St. Marks Square',
      'Rialto Bridge',
      'Doges Palace'
    ],
    activities: [
      'Gondola Rides',
      'Water Taxis',
      'Island Hopping',
      'Art Galleries'
    ],
    estimatedCost: { currency: 'EUR', min: 30, max: 150 }
  },
  {
    id: 'it-3',
    name: 'Tuscany Countryside',
    description: 'Rolling hills, vineyards, and medieval towns.',
    image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c',
    location: {
      address: 'Tuscany, Italy',
      coordinates: { lat: 43.7711, lng: 11.2486 }
    },
    rating: 4.9,
    bestTimeToVisit: 'May to October',
    thingsToSee: [
      'Val d\'Orcia',
      'Chianti Vineyards',
      'San Gimignano',
      'Siena'
    ],
    activities: [
      'Wine Tasting',
      'Cooking Classes',
      'Cycling Tours',
      'Village Visits'
    ],
    estimatedCost: { currency: 'EUR', min: 40, max: 200 }
  },
  {
    id: 'it-4',
    name: 'Amalfi Coast',
    description: 'Dramatic coastline with colorful villages.',
    image: 'https://images.unsplash.com/photo-1440096267761-385efe9e518f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: {
      address: 'Amalfi Coast, Italy',
      coordinates: { lat: 40.6333, lng: 14.6029 }
    },
    rating: 4.8,
    bestTimeToVisit: 'May to October',
    thingsToSee: [
      'Positano',
      'Ravello Gardens',
      'Amalfi Cathedral',
      'Path of the Gods'
    ],
    activities: [
      'Boat Tours',
      'Beach Visits',
      'Hiking',
      'Limoncello Tasting'
    ],
    estimatedCost: { currency: 'EUR', min: 50, max: 250 }
  }
];

const greecePlaces = [
  {
    id: 'gr-1',
    name: 'Acropolis',
    description: 'Ancient citadel with iconic Parthenon temple.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235',
    location: {
      address: 'Athens, Greece',
      coordinates: { lat: 37.9715, lng: 23.7267 }
    },
    rating: 4.9,
    bestTimeToVisit: 'March to May or September to November',
    thingsToSee: [
      'Parthenon',
      'Erechtheion',
      'Temple of Athena Nike',
      'Propylaea'
    ],
    activities: [
      'Archaeological Tours',
      'Museum Visits',
      'Photography',
      'Historical Walks'
    ],
    estimatedCost: { currency: 'EUR', min: 20, max: 30 }
  },
  {
    id: 'gr-2',
    name: 'Santorini',
    description: 'Stunning volcanic island with white-washed buildings.',
    image: 'https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: {
      address: 'Santorini, Greece',
      coordinates: { lat: 36.3932, lng: 25.4615 }
    },
    rating: 4.8,
    bestTimeToVisit: 'April to October',
    thingsToSee: [
      'Oia Sunset',
      'Caldera Views',
      'Blue Domed Churches',
      'Red Beach'
    ],
    activities: [
      'Sunset Watching',
      'Wine Tasting',
      'Boat Tours',
      'Beach Visits'
    ],
    estimatedCost: { currency: 'EUR', min: 40, max: 200 }
  },
  {
    id: 'gr-3',
    name: 'Meteora',
    description: 'Monasteries perched atop dramatic rock formations.',
    image: 'https://plus.unsplash.com/premium_photo-1661915593326-9c0a4ed44d22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: {
      address: 'Meteora, Greece',
      coordinates: { lat: 39.7217, lng: 21.6307 }
    },
    rating: 4.9,
    bestTimeToVisit: 'March to May or September to November',
    thingsToSee: [
      'Great Meteoron Monastery',
      'Varlaam Monastery',
      'Holy Trinity Monastery',
      'Sunset Rock'
    ],
    activities: [
      'Monastery Visits',
      'Rock Climbing',
      'Hiking',
      'Photography'
    ],
    estimatedCost: { currency: 'EUR', min: 15, max: 35 }
  },
  {
    id: 'gr-4',
    name: 'Delphi',
    description: 'Ancient sanctuary of Apollo and oracle site.',
    image: 'https://plus.unsplash.com/premium_photo-1664475023804-22236fbc8a69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: {
      address: 'Delphi, Greece',
      coordinates: { lat: 38.4824, lng: 22.5010 }
    },
    rating: 4.7,
    bestTimeToVisit: 'April to October',
    thingsToSee: [
      'Temple of Apollo',
      'Ancient Theater',
      'Delphi Museum',
      'Sanctuary of Athena'
    ],
    activities: [
      'Archaeological Tours',
      'Museum Visits',
      'Mountain Hiking',
      'Historical Learning'
    ],
    estimatedCost: { currency: 'EUR', min: 12, max: 25 }
  }
];

export const countries: Country[] = [
  {
    id: 'jp',
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    description: 'Land of the rising sun, blending ancient traditions with modern technology.',
    touristPlaces: japanPlaces
  },
  {
    id: 'fr',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    description: 'Country of art, culture, and culinary excellence.',
    touristPlaces: francePlaces
  },
  {
    id: 'it',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    description: 'Home to ancient history, art masterpieces, and culinary delights.',
    touristPlaces: italianPlaces
  },
  {
    id: 'gr',
    name: 'Greece',
    code: 'GR',
    flag: '🇬🇷',
    description: 'Cradle of Western civilization with ancient ruins and beautiful islands.',
    touristPlaces: greecePlaces
  }
];