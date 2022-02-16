import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';
import { Fuser } from './Fuser';

export const fusersContext = createContext({} as IItemsContext<Fuser>);

export function useFusers() {
  return useContext(fusersContext);
}
