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
import { setCookie, destroyCookie, parseCookies } from 'nookies';

import { api } from '../api/api';
import { User } from '../user/User';
import { interact } from '../interactions/interact';
import { reportSubscription } from '../ads/reportSubscription';

interface ISignIn{
  provider: 'google' | 'facebook',
  accessToken: string,
}
interface IUserContextProvider{
    user:User|null
    loading:boolean
    logOut:()=>void
    refreshUser:()=>void
    signIn:(params:ISignIn)=>Promise<void>
    setUser:Dispatch<SetStateAction<User|null>>
}

export const userContext = createContext({} as IUserContextProvider);

export function UserContextProvider({ children }: {children:ReactNode}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User|null>(null);

  async function logOut() {
    router.push('/landing');
    destroyCookie(undefined, 'authToken', { path: '/' });
    await api.post('users/logout');
    delete api.defaults.headers.common.Authorization;
    setUser(null);
  }

  async function signIn({ provider, accessToken }:ISignIn) {
    const res = await api.post('users', { provider, accessToken });
    reportSubscription();
    interact({ type: 'sign in', user });
    const token = res.headers.authorization;
    api.defaults.headers.common.Authorization = token;
    setCookie(undefined, 'authToken', token, {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
    });
    setUser(res.data);
  }

  async function refreshUser() {
    const { authToken } = parseCookies();
    if (authToken) {
      setLoading(true);
      try {
        const res = await api.get('users/me');
        setUser(res.data);
        setLoading(false);
      } catch (err:any) {
        if (err?.response?.status === 403) {
          setUser(null);
          setLoading(false);
        } else {
          throw err;
        }
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
      loading,
      refreshUser,
    }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
