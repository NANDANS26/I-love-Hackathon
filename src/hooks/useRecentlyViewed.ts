import { useState, useCallback, useEffect } from 'react';

interface RecentlyViewedItem {
  id: string;
  type: 'destination' | 'restaurant' | 'vehicle';
  timestamp: number;
}

const MAX_ITEMS = 10;

export const useRecentlyViewed = () => {
  const [recentItems, setRecentItems] = useState<RecentlyViewedItem[]>(() => {
    const saved = localStorage.getItem('recently_viewed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recently_viewed', JSON.stringify(recentItems));
  }, [recentItems]);

  const addToRecentlyViewed = useCallback((id: string, type: RecentlyViewedItem['type']) => {
    setRecentItems((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      const newItem = { id, type, timestamp: Date.now() };
      const updated = [newItem, ...filtered].slice(0, MAX_ITEMS);
      return updated;
    });
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setRecentItems([]);
    localStorage.removeItem('recently_viewed');
  }, []);

  return {
    recentItems,
    addToRecentlyViewed,
    clearRecentlyViewed
  };
};