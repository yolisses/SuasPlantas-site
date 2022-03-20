/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useMapImport } from './leaflet/MapImportContext';

type LatLng = [number, number]

type LatLngBoundsExpression = [LatLng, LatLng]

interface UpdateMapProps{
  circleRadius?:number
  center:[number, number]
}

export function UpdateMapCenter({ center, circleRadius }:UpdateMapProps) {
  const { rlImports } = useMapImport();
  if (!rlImports) return null;

  function updateCenter(e:any) {
    const newCenter = e.target.getCenter();
    center[0] = newCenter.lat;
    center[1] = newCenter.lng;
  }

  const map = rlImports.useMapEvents({
    moveend: updateCenter,
    dragend: updateCenter,
  });

  useEffect(() => {
    map.setView(center);
  }, [center]);

  useEffect(() => {
    if (circleRadius) {
      const offset = circleRadius / 100;
      const bounds:LatLngBoundsExpression = [
        [center[0] - offset, center[1]],
        [center[0] + offset, center[1]],
      ];
      map.fitBounds(bounds);
    }
  }, [circleRadius, center]);

  return null;
}
