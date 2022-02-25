import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';

interface ILocationFilter{
    location?:string
    coordinates?: [number, number]
    setLocation:Dispatch<SetStateAction<string|undefined>>
    setCoordinates: Dispatch<SetStateAction<[number, number]|undefined>>

}

export const locationContext = createContext({} as ILocationFilter);

export function LocationFIlterContext({ children }:{children:ReactNode}) {
  const [location, setLocation] = useState<Location>('teste');
  const [coordinates, setCoordinates] = useState<[number, number]>([37.3931, -121.962]);

  useEffect(() => {
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
