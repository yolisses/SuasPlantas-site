import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';
import { Plant } from './Plant';

export const plantsContext = createContext({} as IItemsContext<Plant>);

export function usePlants() {
  return useContext(plantsContext);
}
