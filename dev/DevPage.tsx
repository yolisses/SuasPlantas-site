import { useMapImport } from '../location/leaflet/MapImportContext';

export function DevPage() {
  const { imports, loaded } = useMapImport();

  return (
    <div className="flex flex-1 bg-red-400">
      {loaded && (
      <imports.MapContainer
        zoom={14}
        center={[1, 1]}
        style={{ backgroundColor: 'red', height: '100px', flex: 1 }}
      >
        <imports.TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </imports.MapContainer>
      )}
    </div>
  );
}
