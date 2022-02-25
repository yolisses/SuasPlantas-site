import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

interface ILocationFilter{
    location?:string
    coordinates?: [number, number]
    setLocation:Dispatch<SetStateAction<string|undefined>>
    setCoordinates: Dispatch<SetStateAction<[number, number]|undefined>>

}

export const locationContext = createContext({} as ILocationFilter);

export function LocationFIlterContext({ children }:{children:ReactNode}) {
  const [location, setLocation] = useState<string>();
  const [coordinates, setCoordinates] = useState<[number, number]>([37.3931, -121.962]);

  async function getLocationByIp() {
    const ip = 2;
    const res = await api.get('location');
    const {
      city, state, latitude, longitude,
    } = res.data;
    setLocation(`${city}, ${state}`);
    setCoordinates([latitude, longitude]);
  }

  useEffect(() => {
    getLocationByIp();
  });

  return (
    <locationContext.Provider value={{
      location,
      setLocation,
      coordinates,
      setCoordinates,
    }}
    >
      {children}
    </locationContext.Provider>
  );
}

export function useLocationFilter() {
  return useContext(locationContext);
}
