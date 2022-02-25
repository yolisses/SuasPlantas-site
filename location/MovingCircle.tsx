import { useEffect, useState } from 'react';
import { Circle, useMapEvents } from 'react-leaflet';

export function MovingCircle({ initialCenter }:{initialCenter:[number, number]}) {
  const [center, setCenter] = useState<[number, number]>([...initialCenter]);

  function updateCenter(e:any) {
    const newCenter = e.target.getCenter();
    setCenter([newCenter.lat, newCenter.lng]);
  }
  const map = useMapEvents({
    move: updateCenter,
    drag: updateCenter,
  });

  useEffect(() => {
    map.setView(center);
  }, [center]);

  return <Circle center={center} radius={10000} opacity={0.5} fillOpacity={0.075} />;
}
