import { Transport } from '../types/transport';

export interface LocationCoordinates {
  [key: string]: [number, number];
}

export const locationCoordinates: LocationCoordinates = {
  'Mumbai': [19.0760, 72.8777],
  'Delhi': [28.6139, 77.2090],
  'Bangalore': [12.9716, 77.5946],
  'Chennai': [13.0827, 80.2707],
  'Jaipur': [26.9124, 75.7873],
  'Noida': [28.5355, 77.3910],
  'Mumbai Airport': [19.0896, 72.8656],
  'Delhi Airport': [28.5562, 77.1000],
  'Bangalore Airport': [13.1986, 77.7066],
  'Chennai Central': [13.0827, 80.2707],
  'Electronic City': [12.8458, 77.6654],
  'City Center': [19.0760, 72.8777],
  'OMR': [12.9387, 80.2242]
};

export const getLocationCoordinates = (location: string): [number, number] => {
  return locationCoordinates[location] || [20.5937, 78.9629]; // Default to India's center
};

export interface MapData {
  markers: Array<{
    position: [number, number];
    title: string;
    type: 'transport';
  }>;
  path?: [[number, number], [number, number]];
}

export const getTransportMapData = (
  transport: Transport | undefined,
  allTransports: Transport[]
): MapData => {
  if (!transport && !allTransports.length) {
    return { markers: [] };
  }

  if (transport?.route) {
    const [start, end] = transport.route.split(' to ');
    const startCoords = getLocationCoordinates(start);
    const endCoords = getLocationCoordinates(end);

    return {
      markers: [
        {
          position: startCoords,
          title: `${start} (Start)`,
          type: 'transport'
        },
        {
          position: endCoords,
          title: `${end} (End)`,
          type: 'transport'
        }
      ],
      path: [startCoords, endCoords]
    };
  }

  return {
    markers: allTransports.map(t => {
      const [start] = t.route.split(' to ');
      return {
        position: getLocationCoordinates(start),
        title: t.name,
        type: 'transport'
      };
    })
  };
};