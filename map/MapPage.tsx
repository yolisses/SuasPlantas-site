import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useUser } from '../auth/userContext';
import { generateArray } from '../dev/utils/generateArray';
import { defaultPosition } from '../location/defaultPosition';
import { useMapImport } from '../location/leaflet/MapImportContext';
import { loremIpsum } from '../mock/loremIpsum';
import { User } from '../user/User';
import { UserPage } from '../user/UserPage';
import { customMarkerConfig } from './customMarkerConfig';

const locations:[number, number][] = generateArray(10)
  .map((item) => [defaultPosition[0] + Math.random(), defaultPosition[1] + Math.random()]);
export function MapPage() {
  const { rlImports, lImports, loaded } = useMapImport();
  if (!loaded) return null;

  const position = defaultPosition;
  const markerIcon = lImports.icon(customMarkerConfig);

  const { user: defaultUser } = useUser();

  const [user, setUser] = useState<User>();

  function handleClose() {
    setUser(undefined);
  }

  return (
    <div className="flex flex-row relative h-no-header overflow-hidden">
      <div
        className={`transition-all container bg-white shadow-lg fixed top-12 bottom-0 left-0 overflow-y-auto ${
          user ? 'max-w-md' : 'max-w-0'}`}
        style={{ zIndex: 500 }}
      >
        <button
          onClick={handleClose}
          className="cursor-pointer absolute top-2 right-2 p-2 hover:bg-black hover:bg-opacity-10 rounded-full"
        >
          <GrClose size={18} />
        </button>
        {user && <UserPage user={user} />}
      </div>
      <rlImports.MapContainer
        zoom={10}
        center={position}
        style={{ flex: 1 }}
        zoomControl={false}
        doubleClickZoom={false}
      >
        <rlImports.TileLayer
          attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((position) => (
          <rlImports.Marker
            position={position}
            icon={markerIcon}
            eventHandlers={{
              click: () => setUser(defaultUser),
            }}
          />
        ))}
      </rlImports.MapContainer>
    </div>
  );
}
