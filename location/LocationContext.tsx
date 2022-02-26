import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

interface Location{
  city:string
  state:string
  radius:number
  position:[number, number]
}

interface LocationContext{
  text:string|null
  location?:Location
  setLocation:Dispatch<SetStateAction<Location|undefined>>
}

export const locationContext = createContext({} as LocationContext);

export function LocationContextProvider({ children }:{children:ReactNode}) {
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
      const newLocation :Location = {
        city,
        state,
        radius: location?.radius || 10,
        position: [latitude, longitude],
      };
      setLocation(newLocation);
      localStorage.setItem('location', JSON.stringify(newLocation));
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

export function useLocation() {
  return useContext(locationContext);
}
