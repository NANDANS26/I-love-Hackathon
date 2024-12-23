export const validateImageUrl = (url: string): boolean => {
  if (!url) return false;
  return url.startsWith('http') || url.startsWith('data:image') || url.startsWith('/');
};

export const getFallbackImage = (type: 'destination' | 'hotel' | 'restaurant' | 'profile' = 'destination'): string => {
  const fallbacks = {
    destination: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    profile: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167'
  };
  return fallbacks[type];
};