export type FilterCategory = 'destinations' | 'hotels' | 'vehicles';

export interface FilterOption {
  id: string;
  label: string;
  value: string | number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface SearchFilters {
  category: FilterCategory;
  priceRange?: PriceRange;
  ecoCertified?: boolean;
  rating?: number;
  vehicleType?: string;
  amenities?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'rating' | 'eco';
}