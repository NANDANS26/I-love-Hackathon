import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Plane } from 'lucide-react';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

type MarkerType = {
  position: [number, number];
  title: string;
  type?: 'destination' | 'flight' | 'hotel';
};

interface MapViewProps {
  markers?: MarkerType[];
  flightPath?: [[number, number], [number, number]];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const MapView: React.FC<MapViewProps> = ({
  markers = [],
  flightPath,
  center = [20.5937, 78.9629], // Default center (India)
  zoom = 4,
  className = ''
}) => {
  // Client-side only
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={`rounded-lg overflow-hidden z-0 ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '400px', width: '100%' }}
        scrollWheelZoom={false}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.map((marker, index) => (
          <Marker 
            key={`marker-${index}`}
            position={marker.position}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{marker.title}</h3>
                {marker.type && (
                  <span className="text-sm text-gray-600 capitalize">
                    {marker.type}
                  </span>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        {flightPath && (
          <Polyline
            positions={flightPath}
            pathOptions={{ color: '#0EA5E9', weight: 2, dashArray: '5,10' }}
          />
        )}
      </MapContainer>
    </div>
  );
};