/* eslint-disable no-param-reassign */
import { MapContainer, TileLayer } from 'react-leaflet';

import { MovingCircle } from './MovingCircle';
import { UpdateMapCenter } from './UpdateMapCenter';

interface MapProps{
  circleRadius?:number
  center:[number, number]
}

export function Map({ center, circleRadius }:MapProps) {
  return (
    <MapContainer
      zoom={5}
      minZoom={3.5}
      center={center}
      scrollWheelZoom
      zoomControl={false}
      style={{ flex: 1 }}
    >
      <UpdateMapCenter center={center} circleRadius={circleRadius} />
      <TileLayer
        attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!!circleRadius && <MovingCircle initialCenter={center} radius={circleRadius} />}
    </MapContainer>
  );
}

export default Map;
