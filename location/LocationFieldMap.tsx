/* eslint-disable prefer-destructuring */
import Image from 'next/image';
import { MovingCircle } from './MovingCircle';
import { UpdateMapCenter } from './UpdateMapCenter';
import { useMapImport } from './leaflet/MapImportContext';

interface LocationFieldProps{
    radius?:number
    center:[number, number]
}

export function LocationFieldMap({
  radius,
  center,
}:LocationFieldProps) {
  const { rlImports } = useMapImport();
  if (!rlImports) return null;

  return (
    <div className="h-screen flex flex-col relative z-0">
      <div
        className="absolute z-10 bottom-0 top-0 left-0 right-0 flex items-center justify-center select-none pointer-events-none"
      >
        <Image
          width={40}
          height={40}
          src="/map/map_center.png"
        />
      </div>
      <div className="z-0 flex flex-1">
        <rlImports.MapContainer
          dragging
          zoom={14}
          minZoom={3.5}
          center={center}
          touchZoom={false}
          style={{ flex: 1 }}
          zoomControl={false}
          trackResize={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          closePopupOnClick={false}
        >
          <UpdateMapCenter
            center={center}
            circleRadius={radius}
          />
          <rlImports.TileLayer
            attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!!radius && (
          <MovingCircle
            radius={radius}
            initialCenter={center}
          />
          )}
        </rlImports.MapContainer>
      </div>
    </div>
  );
}
