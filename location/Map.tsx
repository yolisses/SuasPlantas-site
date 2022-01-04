import {
  MapContainer, Marker, Popup, TileLayer, useMapEvents,
} from 'react-leaflet';
import Head from 'next/head';
import { LatLng } from 'leaflet';

function EventHandler({ center }:{center:LatLng}) {
  function updateCenter(e) {
    const newCenter = e.target.getCenter();
    center.lat = newCenter.lat;
    center.lng = newCenter.lng;
  }
  useMapEvents({
    moveend: updateCenter,
    dragend: updateCenter,
  });

  return null;
}

interface MapProps{
  center:LatLng
}

export function Map({ center }:MapProps) {
  return (
    <>
      <MapContainer
        zoom={13}
        scrollWheelZoom
        center={center}
        style={{ flex: 1 }}
      >
        <EventHandler center={center} />
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
