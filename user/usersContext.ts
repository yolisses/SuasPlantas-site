import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';
import { User } from './User';

export const usersContext = createContext({} as IItemsContext<User>);

export function useUsers() {
  return useContext(usersContext);
}
