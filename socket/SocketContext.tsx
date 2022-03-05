import {
  useState,
  ReactNode,
  useContext,
  createContext,
} from 'react';
import Client from 'socket.io-client';
import { baseURL } from '../api/baseURL';

interface SocketContext{
}

const socketContext = createContext({} as SocketContext);

export function SocketContextProvider({ children }:{children:ReactNode}) {
  const [socket] = useState(Client(baseURL));

  socket.on('connection', async () => {
    console.log('coisa conectada');
  });

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
}

export function useSocket() {
  return useContext(socketContext);
}
