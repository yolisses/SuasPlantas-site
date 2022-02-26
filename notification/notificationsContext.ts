import { createContext, useContext } from 'react';
import { ItemsContext } from '../pagination/PaginationProvider';
import { Notification } from './Notification';

export const notificationsContext = createContext({} as ItemsContext<Notification>);

export function useNotifications() {
  return useContext(notificationsContext);
}
