import { useMapImport } from '../location/leaflet/MapImportContext';

export function DevPage() {
  const { rlImports, loaded } = useMapImport();

  return (
    <div className="flex flex-1 bg-red-400">
      {loaded && (
      <rlImports.MapContainer
        zoom={14}
        center={[1, 1]}
        style={{ backgroundColor: 'red', height: '100px', flex: 1 }}
      >
        <rlImports.TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </rlImports.MapContainer>
      )}
    </div>
  );
}
