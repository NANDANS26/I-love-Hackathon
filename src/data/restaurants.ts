import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Golden Spice',
    cuisine: 'Indian',
    description: 'Authentic Indian cuisine with a modern twist, featuring signature butter chicken and fresh naan.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
    rating: 4.8,
    priceRange: '$$',
    location: {
      address: 'Marine Drive, Mumbai',
      coordinates: { lat: 18.9322, lng: 72.8264 },
      landmark: 'Near Nariman Point'
    },
    features: ['Outdoor Seating', 'Live Music', 'Vegan Options'],
    openingHours: {
      mon_fri: '11:00 AM - 11:00 PM',
      weekends: '11:00 AM - 12:00 AM'
    },
    specialties: ['Butter Chicken', 'Dal Makhani', 'Biryani'],
    averageCost: 40,
    verified: true
  },
  {
    id: '2',
    name: 'Sakura House',
    cuisine: 'Japanese',
    description: 'Traditional Japanese dining experience with fresh sushi and seasonal specialties.',
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b',
    rating: 4.9,
    priceRange: '$$$',
    location: {
      address: 'Bandra West, Mumbai',
      coordinates: { lat: 19.0596, lng: 72.8295 },
      landmark: 'Near Bandstand'
    },
    features: ['Private Rooms', 'Sake Bar', 'Garden View'],
    openingHours: {
      mon_fri: '12:00 PM - 10:30 PM',
      weekends: '12:00 PM - 11:00 PM'
    },
    specialties: ['Sushi Platter', 'Ramen', 'Tempura'],
    averageCost: 60,
    verified: true
  },
  {
    id: '3',
    name: 'Spice Garden',
    cuisine: 'North Indian',
    description: 'Authentic North Indian cuisine with live tandoor counter.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
    rating: 4.6,
    priceRange: '$$',
    location: {
      address: 'Connaught Place, Delhi',
      coordinates: { lat: 28.6292, lng: 77.2182 },
      landmark: 'Near CP Metro Station'
    },
    features: ['Live Kitchen', 'Rooftop Seating', 'Family Friendly'],
    openingHours: {
      mon_fri: '12:00 PM - 11:00 PM',
      weekends: '12:00 PM - 12:00 AM'
    },
    specialties: ['Dal Makhani', 'Tandoori Platter', 'Naan Varieties'],
    averageCost: 35,
    verified: true
  },
  {
    id: '4',
    name: 'Coastal Flavors',
    cuisine: 'South Indian',
    description: 'Fresh seafood and authentic coastal delicacies.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    rating: 4.7,
    priceRange: '$$',
    location: {
      address: 'Koramangala, Bangalore',
      coordinates: { lat: 12.9352, lng: 77.6245 },
      landmark: 'Near Forum Mall'
    },
    features: ['Fresh Seafood', 'Traditional Ambiance', 'Live Music'],
    openingHours: {
      mon_fri: '11:30 AM - 10:30 PM',
      weekends: '11:30 AM - 11:00 PM'
    },
    specialties: ['Fish Curry', 'Appam', 'Malabar Parotta'],
    averageCost: 30,
    verified: true
  },
  {
    id: '5',
    name: 'Dragon House',
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine with modern fusion elements.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    rating: 4.5,
    priceRange: '$$$',
    location: {
      address: 'Park Street, Kolkata',
      coordinates: { lat: 22.5557, lng: 88.3519 },
      landmark: 'Near Park Street Metro'
    },
    features: ['Dim Sum Bar', 'Private Dining', 'Tea House'],
    openingHours: {
      mon_fri: '12:30 PM - 11:00 PM',
      weekends: '12:30 PM - 11:30 PM'
    },
    specialties: ['Dim Sum', 'Peking Duck', 'Hot Pot'],
    averageCost: 45,
    verified: true
  },
  {
    id: '6',
    name: 'Mediterranean Oasis',
    cuisine: 'Mediterranean',
    description: 'Fresh Mediterranean flavors with a modern twist.',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad',
    rating: 4.8,
    priceRange: '$$$',
    location: {
      address: 'Jubilee Hills, Hyderabad',
      coordinates: { lat: 17.4319, lng: 78.4095 },
      landmark: 'Near Jubilee Hills Check Post'
    },
    features: ['Open Kitchen', 'Garden Seating', 'Wine Bar'],
    openingHours: {
      mon_fri: '12:00 PM - 11:00 PM',
      weekends: '12:00 PM - 11:30 PM'
    },
    specialties: ['Hummus Platter', 'Shawarma', 'Baklava'],
    averageCost: 50,
    verified: true
  },
  {
    id: '7',
    name: 'The Fusion Kitchen',
    cuisine: 'Fusion',
    description: 'Innovative fusion of Indian and International cuisines.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    rating: 4.6,
    priceRange: '$$$',
    location: {
      address: 'MG Road, Pune',
      coordinates: { lat: 18.5204, lng: 73.8567 },
      landmark: 'Near MG Road Camp'
    },
    features: ['Molecular Gastronomy', 'Cocktail Bar', 'Weekend Brunches'],
    openingHours: {
      mon_fri: '12:00 PM - 11:30 PM',
      weekends: '11:00 AM - 12:00 AM'
    },
    specialties: ['Fusion Tacos', 'Molecular Desserts', 'Creative Cocktails'],
    averageCost: 55,
    verified: true
  }
];