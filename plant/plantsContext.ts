import { createContext, useContext } from 'react';
import { ItemsContext } from '../pagination/PaginationProvider';
import { Plant } from './Plant';

export const plantsContext = createContext({} as ItemsContext<Plant>);

export function usePlants() {
  return useContext(plantsContext);
}
