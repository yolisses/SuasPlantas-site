import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

export const AuthContext = createContext<any>(undefined);

export function AuthContextProvider({ children }:any) {
  const [token, setTokenData] = useState<string|null>();
  const [user, setUser] = useState();

  function setToken(token:string|null) {
    api.defaults.headers.common.Authorization = token || '';
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    setTokenData(token);
  }

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (token !== saved) { setToken(saved); }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
