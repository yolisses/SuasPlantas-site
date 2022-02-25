import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

export function UpdateMapCenter({ center }:{center:[number, number]}) {
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
