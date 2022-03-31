import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react';
import Client, { Socket } from 'socket.io-client';
import { baseURL } from '../api/baseURL';
import { getAuthToken } from '../api/getAuthToken';
import { useUser } from '../auth/UserContext';

interface SocketContext{
  socket:Socket
}

const socketContext = createContext({} as SocketContext);

export function SocketContextProvider({ children }:{children:ReactNode}) {
  const { user, loading: loadingUser } = useUser();
  const [socket] = useState(() => {
    const socket = Client(baseURL);
    socket.emit('ping');
    return socket;
  });

  useEffect(() => {
    if (!loadingUser) {
      const token = getAuthToken();
      if (token) {
        socket.emit('auth', token, (res:{userId:number}) => {
          if (res?.userId !== user.id) {
            throw new Error('Could not authenticate socket');
          }
        });
      }
    }
  }, [loadingUser]);

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
}

export function useSocket() {
  return useContext(socketContext);
}
