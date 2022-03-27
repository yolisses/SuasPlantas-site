/* eslint-disable no-param-reassign */
import { GrClose } from 'react-icons/gr';
import { FaRegMap } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import { api } from '../api/api';
import { User } from '../user/User';
import { UserPage } from '../user/UserPage';
import { useUser } from '../auth/userContext';
import { customMarkerConfig } from './customMarkerConfig';
import { useLocation } from '../location/LocationContext';
import { MapCustomAtribution } from './mapCustomAtribution';
import { useMapImport } from '../location/leaflet/MapImportContext';

export function MapPage() {
  const { rlImports, lImports } = useMapImport();
  if (!rlImports || !lImports) return null;

  const { location } = useLocation();
  const { user: currentUser } = useUser();
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const position = location?.position || currentUser?.location?.coordinates;

  function handleClose() {
    setUser(undefined);
  }

  async function getUsers() {
    const res = await api.get('users', { params: { profileRelations: true } });
    const users = (res.data.content as User[]).map((user:User) => {
      if (user.location && user.id !== currentUser?.id) {
        user.location.coordinates[0] += Math.random() / 10;
        user.location.coordinates[1] += Math.random() / 10;
      }
      return user;
    });
    setUsers(users);
  }

  useEffect(() => {
    if (currentUser) { getUsers(); }
  }, [position, currentUser]);

  return (
    <div className="flex flex-row flex-1 relative overflow-hidden">
      <div
        className={`z-10 transition-all container bg-white md:shadow-lg fixed top-0 bottom-0 left-0 overflow-y-auto ${
          user ? 'max-w-md' : 'max-w-0'}`}
      >
        <div className="sticky top-0 flex flex-row justify-end w-full z-30">
          <div className="absolute">

            <button
              onClick={handleClose}
              className="cursor-pointer hover:bg-gray-200 aspect-square center rounded-bl-3xl bg-white h-14"
            >
              <GrClose size={18} />
            </button>
          </div>

        </div>
        {user && (
          <>
            <UserPage user={user} mini />
            <div className="rollout md:hidden cursor-pointer fixed bottom-16 p-2 w-full center pointer-events-none">
              <button
                onClick={handleClose}
                className="main-button shadow-lg bg-green-800 rounded-full pointer-events-auto"
              >
                <FaRegMap />
                Voltar para o mapa
              </button>
            </div>
          </>
        ) }
      </div>
      <div className="flex-1 flex z-0">
        <div className="fixed top-0 right-0 z-10">
          <MapCustomAtribution />
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <div className="text-xs">As localizações no mapa são aproximadas</div>
        </div>
        <div className="z-0 flex flex-1">
          <rlImports.MapContainer
            zoom={10}
            minZoom={2}
            center={position}
            style={{ flex: 1 }}
            zoomControl={false}
            doubleClickZoom={false}
            attributionControl={false}
          >
            <rlImports.TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {users.map((user) => {
              if (user.location) {
                return (
                  <rlImports.Marker
                    position={user.location.coordinates}
                    icon={lImports.divIcon({
                      html: ReactDOMServer.renderToString(
                        <div className="relative">
                          <img
                            src="/map/marker.svg"
                            alt=""
                          />
                          <img
                            width="32.8px"
                            alt={user.name}
                            src={user.image}
                            className="absolute top-0 aspect-square object-cover rounded-full border border-emerald-900"
                          />
                        </div>,
                      ),
                      ...customMarkerConfig,
                      className: 'border-none bg-none',
                    })}
                    eventHandlers={{
                      click: () => setUser(user),
                    }}
                  />
                );
              }
            })}
          </rlImports.MapContainer>
        </div>
      </div>
    </div>
  );
}
