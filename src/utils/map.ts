export const getCoordinatesFromAddress = (address: string): [number, number] => {
  // Mock implementation - in a real app, use a geocoding service
  const coordinates: Record<string, [number, number]> = {
    'Mumbai': [19.0760, 72.8777],
    'Delhi': [28.6139, 77.2090],
    'Bangalore': [12.9716, 77.5946],
    'Goa': [15.2993, 74.1240],
    // Add more cities as needed
  };

  // Default to India's center if address not found
  return coordinates[address] || [20.5937, 78.9629];
};

export const flightCoordinates: Record<string, [number, number]> = {
  'Mumbai': [19.0760, 72.8777],
  'Delhi': [28.6139, 77.2090],
  'Bangalore': [12.9716, 77.5946],
  'Goa': [15.2993, 74.1240],
  // Add more airports as needed
}; 