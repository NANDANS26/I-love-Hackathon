import { Destination } from '../types';

export const worldDestinations: Destination[] = [
  // Europe
  {
    id: 'europe-1',
    name: 'Eiffel Tower',
    description: 'Iconic iron lattice tower on the Champ de Mars in Paris.',
    image: 'https://unsplash.com/photos/eiffel-tower-paris-NT1mJPgni6A',
    rating: 4.8,
    ecoCertified: true,
    features: ['Observation Deck', 'Fine Dining', 'Light Show'],
    nearbyAttractions: ['Louvre Museum', 'Arc de Triomphe', 'Seine River'],
    location: 'Paris, France'
  },
  {
    id: 'europe-2',
    name: 'Colosseum',
    description: 'Ancient amphitheater in the heart of Rome.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    rating: 4.9,
    ecoCertified: true,
    features: ['Guided Tours', 'Archaeological Site', 'Historical Monument'],
    nearbyAttractions: ['Roman Forum', 'Palatine Hill', 'Pantheon'],
    location: 'Rome, Italy'
  },
  // Asia
  {
    id: 'asia-1',
    name: 'Mount Fuji',
    description: 'Japan\'s highest mountain and iconic natural landmark.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    rating: 4.9,
    ecoCertified: true,
    features: ['Hiking', 'Photography', 'Cultural Experience'],
    nearbyAttractions: ['Chureito Pagoda', 'Lake Kawaguchiko', 'Aokigahara Forest'],
    location: 'Honshu, Japan'
  },
  // Americas
  {
    id: 'americas-1',
    name: 'Machu Picchu',
    description: 'Ancient Incan city set high in the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    rating: 4.9,
    ecoCertified: true,
    features: ['Archaeological Site', 'Mountain Hiking', 'Guided Tours'],
    nearbyAttractions: ['Sacred Valley', 'Cusco', 'Rainbow Mountain'],
    location: 'Cusco Region, Peru'
  },
  // Australia
  {
    id: 'australia-1',
    name: 'Great Barrier Reef',
    description: 'World\'s largest coral reef system.',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0',
    rating: 4.8,
    ecoCertified: true,
    features: ['Snorkeling', 'Diving', 'Marine Life'],
    nearbyAttractions: ['Whitsunday Islands', 'Daintree Rainforest', 'Cairns'],
    location: 'Queensland, Australia'
  }
];