import { createContext, useContext } from 'react';
import { IItemsContext } from '../pagination/PaginationProvider';
import { Notification } from './Notification';

export const notificationsContext = createContext({} as IItemsContext<Notification>);

export function useNotifications() {
  return useContext(notificationsContext);
}
