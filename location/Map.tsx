import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import Head from 'next/head';

export function Map() {
  const position = [-6.88634, -38.5614];

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom style={{ flex: 1 }}>
        <TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
    </>
  );
}

export default Map;
