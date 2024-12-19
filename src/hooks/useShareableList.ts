import { useState, useCallback } from 'react';
import { ComparisonItem } from '../types';

interface ShareableList {
  id: string;
  items: ComparisonItem[];
  createdAt: number;
  expiresAt: number;
}

export const useShareableList = () => {
  const [shareableList, setShareableList] = useState<ShareableList | null>(null);

  const generateShareableLink = useCallback((items: ComparisonItem[]) => {
    const listId = Math.random().toString(36).substring(2, 15);
    const list: ShareableList = {
      id: listId,
      items,
      createdAt: Date.now(),
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    };
    
    // In a real app, this would be stored in a backend
    localStorage.setItem(`shareable_list_${listId}`, JSON.stringify(list));
    setShareableList(list);
    
    return `${window.location.origin}/shared/${listId}`;
  }, []);

  const getSharedList = useCallback((listId: string) => {
    const saved = localStorage.getItem(`shareable_list_${listId}`);
    if (saved) {
      const list: ShareableList = JSON.parse(saved);
      if (Date.now() < list.expiresAt) {
        return list;
      }
      localStorage.removeItem(`shareable_list_${listId}`);
    }
    return null;
  }, []);

  return {
    shareableList,
    generateShareableLink,
    getSharedList
  };
};