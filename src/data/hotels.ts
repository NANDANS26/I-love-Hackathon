export const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'The Ritz-Carlton',
    description: 'Luxury hotel with stunning views and world-class amenities.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    rating: 4.9,
    pricePerNight: 25000, // ~$300 USD
    location: 'Mumbai, India',
    amenities: [
      'Spa',
      'Pool',
      'Fine Dining',
      'Gym',
      'Business Center'
    ],
    packagePrices: {
      standard: {
        nights: 3,
        price: 85000, // ~$1000 USD including meals and some activities
        includes: ['Breakfast', 'Airport Transfer', 'Welcome Drink']
      },
      premium: {
        nights: 3,
        price: 125000, // ~$1500 USD all-inclusive
        includes: ['All Meals', 'Spa Treatment', 'Private Tours']
      }
    },
    ecoCertified: true
  },
  // Update similar price structures for other hotels
];