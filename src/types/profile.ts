export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  joinedDate: string;
  travelPreferences: string[];
  stats: {
    placesVisited: number;
    countriesVisited: number;
    totalTrips: number;
    reviewsWritten: number;
  };
  upcomingTrips: Trip[];
  pastTrips: Trip[];
  savedPlaces: string[];
}

export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  image: string;
}