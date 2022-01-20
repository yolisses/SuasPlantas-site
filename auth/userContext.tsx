import { destroyCookie, setCookie } from 'nookies';
import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { User } from '../user/User';

interface ISignIn{
  provider: 'google' | 'facebook',
  accessToken: string,
}
interface IUserContextProvider{
    user?:User
    setUser:Dispatch<SetStateAction<User|undefined>>
    logOut:()=>void
    signIn:(params:ISignIn)=>Promise<void>
}

export const userContext = createContext({} as IUserContextProvider);

export function UserContextProvider({ children }: {children:ReactNode}) {
  const [user, setUser] = useState<User>();

  async function logOut() {
    setUser(undefined);
    destroyCookie(undefined, 'suasplantas.token', { path: '/' });
    delete api.defaults.headers.common.Authorization;
    return api.post('users/logout');
  }

  async function signIn({ provider, accessToken }:ISignIn) {
    const res = await api.post('users', { provider, accessToken });
    const token = res.headers.authorization;
    api.defaults.headers.common.Authorization = token;
    setCookie(undefined, 'suasplantas.token', token, {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
    });
    setUser(res.data);
    try {
      const user = JSON.stringify(res.data);
      localStorage.setItem('user', user);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    try {
      const savedUserJson = localStorage.getItem('user');
      const user = JSON.parse(savedUserJson || '');
      setUser(user);
    } catch (err:any) {
      console.log(err);
    }
  }, []);

  return (
    <userContext.Provider value={{
      user, setUser, logOut, signIn,
    }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
