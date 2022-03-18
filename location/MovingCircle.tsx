import { useEffect, useState } from 'react';
import { useMapImport } from './leaflet/MapImportContext';

export interface MovingCircleProps{
  initialCenter:[number, number]
  radius:number
}

export function MovingCircle({ initialCenter, radius }:MovingCircleProps) {
  const { imports, loaded } = useMapImport();
  if (!loaded) return null;

  const [center, setCenter] = useState<[number, number]>([...initialCenter]);

  function updateCenter(e:any) {
    const newCenter = e.target.getCenter();
    setCenter([newCenter.lat, newCenter.lng]);
  }

  const map = imports.useMapEvents({
    move: updateCenter,
    drag: updateCenter,
  });

  useEffect(() => {
    map.setView(center);
  }, [center]);

  useEffect(() => {
    setCenter(initialCenter);
  }, [initialCenter]);

  return (
    <imports.Circle
      opacity={0.5}
      center={center}
      fillOpacity={0.075}
      radius={radius * 1000} // kilometers to meters
    />
  );
}
