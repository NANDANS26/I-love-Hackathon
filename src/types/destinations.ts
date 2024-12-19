import { TouristPlace } from './tourist-place';

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  description: string;
  touristPlaces: TouristPlace[];
}

export interface DestinationState {
  selectedCountry: string | null;
  selectedPlace: string | null;
}