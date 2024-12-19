import { TrendingPlace } from '../types';

export const trendingPlaces: TrendingPlace[] = [
  {
    id: 'trend-1',
    name: 'Ladakh',
    description: 'Experience the magical landscapes and Buddhist monasteries.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
    rating: 4.8,
    trending: {
      rank: 1,
      searchVolume: 15000,
      growthRate: 25
    }
  },
  {
    id: 'trend-2',
    name: 'Hampi',
    description: 'Ancient ruins and boulder-strewn landscape.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010a8ff618e',
    rating: 4.7,
    trending: {
      rank: 2,
      searchVolume: 12000,
      growthRate: 20
    }
  },
  {
    id: 'trend-3',
    name: 'Rann of Kutch',
    description: 'Vast white salt desert under starlit skies.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
    rating: 4.6,
    trending: {
      rank: 3,
      searchVolume: 10000,
      growthRate: 18
    }
  }
];