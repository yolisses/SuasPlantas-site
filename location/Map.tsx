/* eslint-disable no-param-reassign */
import {
  MapContainer, TileLayer, useMapEvents, Circle,
} from 'react-leaflet';
import Head from 'next/head';
import { useEffect } from 'react';
import { MovingCircle } from './MovingCircle';

function EventHandler({ center }:{center:[number, number]}) {
  function updateCenter(e:any) {
    const newCenter = e.target.getCenter();
    center[0] = newCenter.lat;
    center[1] = newCenter.lng;
  }
  const map = useMapEvents({
    moveend: updateCenter,
    dragend: updateCenter,
  });

  useEffect(() => {
    map.setView(center);
  }, [center]);

  return null;
}

interface MapProps{
  center:[number, number]
  circleRadius?:number
}

export function Map({ center, circleRadius }:MapProps) {
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
        {!!circleRadius && <MovingCircle initialCenter={center} />}
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
