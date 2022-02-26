import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

interface LocationParams{
  latitude:number
  longitude:number
  radius:number
}

interface Location{
  city:string
  state:string
  radius:number
  position:[number, number]
}

interface LocationContext{
  text:string|null
  location?:Location
  locationParams?:LocationParams
  setLocation:Dispatch<SetStateAction<Location>>
}

export const locationContext = createContext({} as LocationContext);

export function LocationContextProvider({ children }:{children:ReactNode}) {
  const defaultRadius = 500;
  const [location, setLocation] = useState<Location>();

  const text = location ? `${location.city}, ${location.state} ~ ${location.radius} Km` : null;

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
        position: [latitude, longitude],
        radius: location?.radius || defaultRadius,
      };
      setLocation(newLocation);
    }
  }

  const locationParams = location ? {
    radius: location.radius,
    latitude: location.position[0],
    longitude: location.position[1],
  } : undefined;

  useEffect(() => {
    if (location) {
      localStorage.setItem('location', JSON.stringify(location));
    } else {
      getLocation();
    }
  }, [location]);

  return (
    <locationContext.Provider value={{
      text,
      location,
      setLocation,
      locationParams,
    }}
    >
      {children}
    </locationContext.Provider>
  );
}

export function useLocation() {
  return useContext(locationContext);
}
