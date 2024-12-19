import { useState, useCallback } from 'react';

export const useFavorites = (type: 'destinations' | 'restaurants' | 'vehicles') => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem(`favorites_${type}`);
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id];
      
      localStorage.setItem(`favorites_${type}`, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, [type]);

  const isFavorite = useCallback((id: string) => {
    return favorites.includes(id);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite };
};