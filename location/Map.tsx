/* eslint-disable no-param-reassign */
import { MapContainer, TileLayer } from 'react-leaflet';
import Head from 'next/head';
import { MovingCircle } from './MovingCircle';
import { UpdateMapCenter } from './UpdateMapCenter';

interface MapProps{
  circleRadius?:number
  center:[number, number]
}

export function Map({ center, circleRadius }:MapProps) {
  return (
    <>
      <MapContainer
        zoom={5}
        minZoom={5}
        maxZoom={5}
        zoomControl={false}
        center={center}
        scrollWheelZoom
        style={{ flex: 1 }}
      >
        <UpdateMapCenter center={center} />
        <TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!!circleRadius && <MovingCircle initialCenter={center} radius={circleRadius} />}
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
