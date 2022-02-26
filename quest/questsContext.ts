import { createContext, useContext } from 'react';
import { ItemsContext } from '../pagination/PaginationProvider';
import { Quest } from './Quest';

export const questsContext = createContext({} as ItemsContext<Quest>);

export function useQuests() {
  return useContext(questsContext);
}
