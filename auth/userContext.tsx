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
import { api } from '../api/api';
import { User } from '../user/User';
import { usePreview } from '../preview/PreviewContext';

interface ISignIn{
  provider: 'google' | 'facebook',
  accessToken: string,
}
interface IUserContextProvider{
    user?:User
    logOut:()=>void
    refreshUser:()=>void
    signIn:(params:ISignIn)=>Promise<void>
    setUser:Dispatch<SetStateAction<User|undefined>>
}

export const userContext = createContext({} as IUserContextProvider);

export function UserContextProvider({ children }: {children:ReactNode}) {
  const [user, setUser] = useState<User>();
  const { code: previewCode } = usePreview();

  async function logOut() {
    destroyCookie(undefined, 'suasplantas.token', { path: '/' });
    await api.post('users/logout');
    delete api.defaults.headers.common.Authorization;
    setUser(undefined);
  }

  async function signIn({ provider, accessToken }:ISignIn) {
    const res = await api.post('users', { provider, accessToken, previewCode });
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
    } catch (err:any) {
      if (err?.response?.status === 403) {
        setUser(undefined);
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

  const { refresh: refreshPreview } = usePreview();

  useEffect(() => {
    if (user) refreshPreview(undefined);
  }, [user]);

  return (
    <userContext.Provider value={{
      user,
      logOut,
      signIn,
      setUser,
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
