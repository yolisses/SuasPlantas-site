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
import { useMapImport } from '../location/leaflet/MapImportContext';
import { Footer } from '../footer/Footer';
import { MapCustomAtribution } from './mapCustomAtribution';

export function MapPage() {
  const { rlImports, lImports, loaded } = useMapImport();
  if (!loaded) return null;

  const { location } = useLocation();
  const { user: currentUser } = useUser();
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const position = location?.position || currentUser?.location?.coordinates;

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
    <div className="flex flex-col h-no-header">
      <div className="flex flex-row relative flex-1 overflow-hidden">
        <div
          className={`z-10 transition-all container bg-white md:shadow-lg fixed top-12 bottom-12 md:bottom-0 left-0 overflow-y-auto ${
            user ? 'max-w-md' : 'max-w-0'}`}
        >
          <button
            onClick={handleClose}
            className="hidden md:inline-block cursor-pointer absolute top-2 right-2 p-2 hover:bg-black hover:bg-opacity-10 rounded-full"
          >
            <GrClose size={18} />
          </button>
          {user && (
          <div>
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
          </div>
          ) }
        </div>
        <div className="flex-1 flex z-0">
          <div className="fixed top-12 right-0" style={{ zIndex: 500 }}>
            <MapCustomAtribution />
          </div>
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
                            className="absolute top-0 aspect-square object-cover rounded-full border border-emerald-900 bg-emerald-700"
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
      <Footer selected="map" />
    </div>
  );
}
