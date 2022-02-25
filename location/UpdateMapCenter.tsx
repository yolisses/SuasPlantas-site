import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

interface UpdateMapProps{
  center:[number, number]
  circleRadius?:number
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
    const offset = circleRadius / 100;
    const bounds = [
      [center[0] - offset, center[1]],
      [center[0] + offset, center[1]],
    ];
    console.log(bounds);
    map.fitBounds(bounds);
  }, [circleRadius, center]);

  return null;
}
