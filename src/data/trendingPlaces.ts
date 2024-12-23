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
    image: 'https://plus.unsplash.com/premium_photo-1697729472950-e041cd81b72f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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