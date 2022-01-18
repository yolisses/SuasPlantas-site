import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';

export const plantsContext = createContext({} as IItemsContext);

export function usePlants() {
  return useContext(plantsContext);
}
