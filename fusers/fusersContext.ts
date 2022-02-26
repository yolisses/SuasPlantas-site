import { createContext, useContext } from 'react';
import { ItemsContext } from '../pagination/PaginationProvider';
import { Fuser } from './Fuser';

export const fusersContext = createContext({} as ItemsContext<Fuser>);

export function useFusers() {
  return useContext(fusersContext);
}
