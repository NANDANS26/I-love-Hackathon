import { useState, useCallback } from 'react';
import { ComparisonItem } from '../types';

export const useComparison = (type: ComparisonItem['type']) => {
  const [comparisonItems, setComparisonItems] = useState<string[]>([]);

  const toggleComparison = useCallback((id: string) => {
    setComparisonItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  }, []);

  const isInComparison = useCallback((id: string) => {
    return comparisonItems.includes(id);
  }, [comparisonItems]);

  const clearComparison = useCallback(() => {
    setComparisonItems([]);
  }, []);

  return {
    comparisonItems,
    toggleComparison,
    isInComparison,
    clearComparison
  };
};