import { IconOptions } from 'leaflet';

export const markerWidth = 32.8;
export const markerHeight = 48;

export const customMarkerConfig:IconOptions = {
  iconUrl: '/map/marker.svg',
  popupAnchor: [0, -markerHeight],
  tooltipAnchor: [0, -markerHeight / 2],
  iconSize: [markerWidth, markerHeight],
  iconAnchor: [markerWidth / 2, markerHeight],
};
