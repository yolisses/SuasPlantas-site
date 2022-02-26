import { createContext, useContext } from 'react';
import { ItemsContext } from '../pagination/PaginationProvider';
import { User } from './User';

export const usersContext = createContext({} as ItemsContext<User>);

export function useUsers() {
  return useContext(usersContext);
}
