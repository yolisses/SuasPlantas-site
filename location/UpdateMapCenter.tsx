/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';
import { LatLngBoundsExpression } from 'leaflet';

interface UpdateMapProps{
  circleRadius?:number
  center:[number, number]
}

export function UpdateMapCenter({ center, circleRadius }:UpdateMapProps) {
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

  useEffect(() => {
    if (circleRadius) {
      const offset = circleRadius / 100;
      const bounds = [
        [center[0] - offset, center[1]],
        [center[0] + offset, center[1]],
      ];
      map.fitBounds(bounds as LatLngBoundsExpression);
    }
  }, [circleRadius, center]);

  return null;
}
