import {
  setCookie,
  destroyCookie,
} from 'nookies';
import {
  useState,
  Dispatch,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from 'react';
import { useRouter } from 'next/router';

import { api } from '../api/api';
import { User } from '../user/User';
import { interact } from '../interactions/interact';
import { reportSubscription } from '../ads/reportSubscription';

interface ISignIn{
  provider: 'google' | 'facebook',
  accessToken: string,
}
interface IUserContextProvider{
    user?:User
    logOut:()=>void
    refreshUser:()=>void
    loginResolved:boolean
    signIn:(params:ISignIn)=>Promise<void>
    setUser:Dispatch<SetStateAction<User|undefined>>
}

export const userContext = createContext({} as IUserContextProvider);

export function UserContextProvider({ children }: {children:ReactNode}) {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [loginResolved, setLoginResolved] = useState(false);

  async function logOut() {
    router.push('/landing');
    destroyCookie(undefined, 'suasplantas.token', { path: '/' });
    await api.post('users/logout');
    delete api.defaults.headers.common.Authorization;
    setUser(undefined);
  }

  async function signIn({ provider, accessToken }:ISignIn) {
    const res = await api.post('users', { provider, accessToken });
    reportSubscription();
    interact({ type: 'sign in', user });
    const token = res.headers.authorization;
    api.defaults.headers.common.Authorization = token;
    setCookie(undefined, 'suasplantas.token', token, {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
    });
    setUser(res.data);
  }

  async function refreshUser() {
    try {
      const res = await api.get('users/me');
      setUser(res.data);
      setLoginResolved(true);
    } catch (err:any) {
      if (err?.response?.status === 403) {
        setUser(undefined);
        setLoginResolved(true);
      } else {
        throw err;
      }
    }
  }

  useEffect(() => {
    try {
      refreshUser();
    } catch (err:any) {
      console.error(err);
    }
  }, []);

  return (
    <userContext.Provider value={{
      user,
      logOut,
      signIn,
      setUser,
      refreshUser,
      loginResolved,
    }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
