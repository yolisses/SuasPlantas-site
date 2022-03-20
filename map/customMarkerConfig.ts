import { IconOptions } from 'leaflet';

const iconWidth = 32.8;
const iconHeight = 48;

export const customMarkerConfig:IconOptions = {
  iconUrl: '/map/marker.svg',
  iconSize: [iconWidth, iconHeight],
  popupAnchor: [0, -iconHeight],
  iconAnchor: [iconWidth / 2, iconHeight],
  tooltipAnchor: [0, -iconHeight / 2],
};
