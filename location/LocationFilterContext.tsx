import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

interface Location{
  city:string
  state:string
  coordinates:[number, number]
}

interface LocationContext{
  text:string|null
  location?:Location
  setLocation:Dispatch<SetStateAction<Location|undefined>>
}

export const locationContext = createContext({} as LocationContext);

export function LocationFIlterContext({ children }:{children:ReactNode}) {
  const [location, setLocation] = useState<Location>();
  const text = location ? `${location.city}, ${location.state}` : null;

  async function getLocation() {
    const savedLocationString = localStorage.getItem('location');
    if (savedLocationString) {
      const savedLocation = JSON.parse(savedLocationString);
      setLocation(savedLocation);
    } else {
      const res = await api.get('location');
      const {
        city, state, latitude, longitude,
      } = res.data;
      const location :Location = {
        city, state, coordinates: [latitude, longitude],
      };
      setLocation(location);
      localStorage.setItem('location', JSON.stringify(location));
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <locationContext.Provider value={{
      text,
      location,
      setLocation,
    }}
    >
      {children}
    </locationContext.Provider>
  );
}

export function useLocationFilter() {
  return useContext(locationContext);
}
