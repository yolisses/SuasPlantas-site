import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react';
import Client, { Socket } from 'socket.io-client';
import { baseURL } from '../api/baseURL';
import { useUser } from '../auth/UserContext';
import { getAuthToken } from '../api/getAuthToken';

interface SocketContext{
  socket:Socket
}

const socketContext = createContext({} as SocketContext);

export function SocketContextProvider({ children }:{children:ReactNode}) {
  const { user } = useUser();
  const [socket] = useState(() => {
    const socket = Client(baseURL);
    socket.emit('ping');
    return socket;
  });

  useEffect(() => {
    if (user) {
      const token = getAuthToken();
      if (token) {
        socket.emit('auth', token, (res:{userId:number}) => {
          if (res?.userId !== user.id) {
            throw new Error('Could not authenticate socket');
          }
        });
      }
    }
  }, [user]);

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
}

export function useSocket() {
  return useContext(socketContext);
}
