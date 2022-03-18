import { useMapImport } from '../location/leaflet/MapImportContext';

export function MapPage() {
  const { imports, loaded } = useMapImport();
  if (!loaded) return null;

  return (
    <div className="flex flex-col flex-1 bg-green-600 h-no-header">
      <imports.MapContainer
        style={{ flex: 1 }}
        center={[0, 1]}
        zoom={10}
      >
        <imports.TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </imports.MapContainer>
    </div>
  );
}
