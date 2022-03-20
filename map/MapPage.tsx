import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';

import { FaRegMap } from 'react-icons/fa';
import { User } from '../user/User';
import { UserPage } from '../user/UserPage';
import { useUser } from '../auth/userContext';
import { customMarkerConfig } from './customMarkerConfig';
import { generateArray } from '../dev/utils/generateArray';
import { defaultPosition } from '../location/defaultPosition';
import { useMapImport } from '../location/leaflet/MapImportContext';
import { useLocation } from '../location/LocationContext';
import { api } from '../api/api';

const locations:[number, number][] = generateArray(10)
  .map((item) => [defaultPosition[0] + Math.random(), defaultPosition[1] + Math.random()]);
export function MapPage() {
  const { rlImports, lImports, loaded } = useMapImport();
  if (!loaded) return null;

  const { user: currentUser } = useUser();
  const { location } = useLocation();
  const position = location?.position || currentUser?.location.coordinates;

  const [user, setUser] = useState<User>();
  const markerIcon = lImports.icon(customMarkerConfig);
  const [users, setUsers] = useState<User[]>([]);

  function handleClose() {
    setUser(undefined);
  }

  async function getUsers() {
    const res = await api.get('users');
    console.log('aqui', res);
    setUsers(res.data.content);
  }

  useEffect(() => {
    getUsers();
  }, [position]);

  return (
    <div className="flex flex-row relative h-no-header overflow-hidden">
      <div
        className={`transition-all container bg-white shadow-lg fixed top-12 bottom-0 left-0 overflow-y-auto ${
          user ? 'max-w-md' : 'max-w-0'}`}
        style={{ zIndex: 500 }}
      >
        <button
          onClick={handleClose}
          className="hidden md:inline-block cursor-pointer absolute top-2 right-2 p-2 hover:bg-black hover:bg-opacity-10 rounded-full"
        >
          <GrClose size={18} />
        </button>
        {user && <UserPage user={user} mini />}
        {user && (
        <div className="rollout md:hidden cursor-pointer fixed bottom-2 w-full center">
          <button
            onClick={handleClose}
            className="main-button bg-green-800 rounded-full"
          >
            <FaRegMap />
            Voltar para o mapa
          </button>
        </div>
        )}
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
        {users.map((user) => {
          if (user.location) {
            return (
              <rlImports.Marker
                position={user.location.coordinates}
                icon={markerIcon}
                eventHandlers={{
                  click: () => setUser(user),
                }}
              />
            );
          }
        })}
      </rlImports.MapContainer>
    </div>
  );
}
