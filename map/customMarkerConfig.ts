import { IconOptions } from 'leaflet';

const iconResizer = 2.6;
const iconWidth = 89 / iconResizer;
const iconHeight = 124 / iconResizer;

export const customMarkerConfig:IconOptions = {
  iconUrl: '/map/marker.png',
  iconSize: [iconWidth, iconHeight],
  popupAnchor: [0, -iconHeight],
  iconAnchor: [iconWidth / 2, iconHeight],
  tooltipAnchor: [0, -iconHeight / 2],
};
