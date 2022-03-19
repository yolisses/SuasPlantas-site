import { defaultPosition } from '../location/defaultPosition';
import { useMapImport } from '../location/leaflet/MapImportContext';
import { customMarkerConfig } from './customMarkerConfig';

export function MapPage() {
  const { rlImports, lImports, loaded } = useMapImport();
  if (!loaded) return null;

  const position = defaultPosition;
  const markerIcon = lImports.icon(customMarkerConfig);

  return (
    <div className="flex flex-col flex-1 bg-green-600 h-no-header">
      <rlImports.MapContainer
        style={{ flex: 1 }}
        center={position}
        zoom={10}
      >
        <rlImports.TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <rlImports.Marker
          position={position}
          icon={markerIcon}
        >
          <rlImports.Popup>
            text
          </rlImports.Popup>
        </rlImports.Marker>
      </rlImports.MapContainer>
    </div>
  );
}
