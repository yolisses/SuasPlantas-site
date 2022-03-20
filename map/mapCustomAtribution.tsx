export function MapCustomAtribution() {
  return (
    <div className="backdrop-blur-lg px-1" style={{ fontSize: '0.65rem' }}>
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
      {' '}
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
