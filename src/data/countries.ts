import { Country } from '../types/destinations';

export const countries: Country[] = [
  {
    id: 'in',
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    description: 'Land of diverse cultures, ancient temples, and rich heritage.',
    touristPlaces: [
      {
        id: 'in-1',
        name: 'Taj Mahal',
        description: 'An iconic symbol of love and Mughal architecture.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
        location: {
          address: 'Agra, Uttar Pradesh',
          coordinates: { lat: 27.1751, lng: 78.0421 }
        },
        rating: 4.9,
        bestTimeToVisit: 'October to March',
        thingsToSee: ['Main Mausoleum', 'Gardens', 'Mosque'],
        activities: ['Photography', 'Guided Tours', 'Sunset Viewing'],
        estimatedCost: { currency: 'INR', min: 1100, max: 1500 }
      },
      {
        id: 'in-2',
        name: 'Varanasi Ghats',
        description: 'Sacred city with ancient ghats along the Ganges.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
        location: {
          address: 'Varanasi, Uttar Pradesh',
          coordinates: { lat: 25.3176, lng: 83.0062 }
        },
        rating: 4.7,
        bestTimeToVisit: 'November to March',
        thingsToSee: ['Ganga Aarti', 'Temples', 'Ghats'],
        activities: ['Boat Rides', 'Temple Visits', 'Photography'],
        estimatedCost: { currency: 'INR', min: 500, max: 2000 }
      }
    ]
  },
  {
    id: 'jp',
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    description: 'Blend of ancient traditions and modern technology.',
    touristPlaces: [
      {
        id: 'jp-1',
        name: 'Mount Fuji',
        description: "Japan's highest mountain and iconic symbol.",
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
        location: {
          address: 'Honshu, Japan',
          coordinates: { lat: 35.3606, lng: 138.7274 }
        },
        rating: 4.8,
        bestTimeToVisit: 'July to August',
        thingsToSee: ['Summit', 'Five Lakes', 'Chureito Pagoda'],
        activities: ['Hiking', 'Photography', 'Lake Tours'],
        estimatedCost: { currency: 'JPY', min: 1000, max: 5000 }
      },
      {
        id: 'jp-2',
        name: 'Kyoto Temples',
        description: 'Ancient temples and traditional gardens.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
        location: {
          address: 'Kyoto, Japan',
          coordinates: { lat: 35.0116, lng: 135.7681 }
        },
        rating: 4.9,
        bestTimeToVisit: 'March to May',
        thingsToSee: ['Kinkaku-ji', 'Fushimi Inari', 'Arashiyama'],
        activities: ['Temple Visits', 'Tea Ceremony', 'Garden Tours'],
        estimatedCost: { currency: 'JPY', min: 2000, max: 8000 }
      }
    ]
  },
  {
    id: 'it',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    description: 'Home to ancient ruins, art treasures, and culinary delights.',
    touristPlaces: [
      {
        id: 'it-1',
        name: 'Colosseum',
        description: 'Ancient amphitheater and iconic symbol of Rome.',
        image: 'https://images.unsplash.com/photo-1552432424-0e46c51ff978',
        location: {
          address: 'Rome, Italy',
          coordinates: { lat: 41.8902, lng: 12.4922 }
        },
        rating: 4.8,
        bestTimeToVisit: 'April to May',
        thingsToSee: ['Arena', 'Underground', 'Arch of Constantine'],
        activities: ['Guided Tours', 'Photography', 'Historical Exploration'],
        estimatedCost: { currency: 'EUR', min: 16, max: 50 }
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
        rating: 4.7,
        bestTimeToVisit: 'September to November',
        thingsToSee: ['Grand Canal', "St. Mark's Square", 'Rialto Bridge'],
        activities: ['Gondola Rides', 'Walking Tours', 'Island Hopping'],
        estimatedCost: { currency: 'EUR', min: 30, max: 100 }
      }
    ]
  },
  {
    id: 'th',
    name: 'Thailand',
    code: 'TH',
    flag: '🇹🇭',
    description: 'Tropical beaches, royal palaces, and ancient temples.',
    touristPlaces: [
      {
        id: 'th-1',
        name: 'Grand Palace',
        description: 'Former residence of Thai kings and temple complex.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
        location: {
          address: 'Bangkok, Thailand',
          coordinates: { lat: 13.7500, lng: 100.4914 }
        },
        rating: 4.7,
        bestTimeToVisit: 'November to April',
        thingsToSee: ['Temple of Emerald Buddha', 'Throne Halls', 'Museums'],
        activities: ['Guided Tours', 'Temple Visits', 'Cultural Shows'],
        estimatedCost: { currency: 'THB', min: 500, max: 1500 }
      },
      {
        id: 'th-2',
        name: 'Phi Phi Islands',
        description: 'Stunning beaches and crystal-clear waters.',
        image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57',
        location: {
          address: 'Krabi, Thailand',
          coordinates: { lat: 7.7407, lng: 98.7784 }
        },
        rating: 4.8,
        bestTimeToVisit: 'November to April',
        thingsToSee: ['Maya Bay', 'Viking Cave', 'Monkey Beach'],
        activities: ['Snorkeling', 'Island Hopping', 'Beach Activities'],
        estimatedCost: { currency: 'THB', min: 1000, max: 3000 }
      }
    ]
  }
];