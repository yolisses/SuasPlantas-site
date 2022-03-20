export function MapCustomAtribution() {
  return (
    <div className="text-xs bg-white px-1">
      <a
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
        href="https://leafletjs.com"
      >
        Leaflet

      </a>
      {' '}
      | &copy;
      <a
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
        href="https://www.openstreetmap.org/copyright"
      >
        OpenStreetMap

      </a>
      {' '}
      contributors
    </div>
  );
}
