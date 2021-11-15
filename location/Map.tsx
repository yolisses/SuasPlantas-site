import * as L from "leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center: L.LatLngTuple;
}

export default function Map({ center }: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const map = L.map(ref.current.id).setView(center, 13);
      setMap(map);
      const teste = 1;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  }, []);

  useEffect(() => {
    if (map) map.panTo(center);
  }, [center]);

  return <div ref={ref} id="leaflet-map" className="flex-1"></div>;
}
