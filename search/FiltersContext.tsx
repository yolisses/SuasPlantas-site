import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

interface Filters{
    text?:string
    swap?:boolean
    sell?:boolean
}

interface IFiltersContext{
    filters?:Filters
    setFilters:Dispatch<SetStateAction<Filters | undefined>>
}

export const filtersContext = createContext({} as IFiltersContext);

export function FiltersContextProvider({ children }:{children:ReactNode}) {
  const [filters, setFilters] = useState<Filters>();

  return (
    <filtersContext.Provider value={{ filters, setFilters }}>
      {children}
    </filtersContext.Provider>
  );
}

export function useFilters() {
  return useContext(filtersContext);
}
