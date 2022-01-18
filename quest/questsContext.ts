import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';
import { Quest } from './Quest';

export const questsContext = createContext({} as IItemsContext<Quest>);

export function useQuests() {
  return useContext(questsContext);
}
