/* eslint-disable no-param-reassign */
import {
  useState,
  ReactNode,
  useContext,
  createContext,
  useEffect,
} from 'react';
import { api } from '../api/api';
import { useUser } from '../auth/userContext';
import { User } from '../user/User';

interface PreviewContext{
    user?:User
    refresh:(code:string)=>void
}

const previewContext = createContext({} as PreviewContext);

export function PreviewProvider({ children }:{children:ReactNode}) {
  const [user, setUser] = useState<User>();
  const { user: actualUser } = useUser();
  if (user) {
    user.preview = true;
    user.id = 'preview';
    user.plants.forEach((plant) => {
      plant.preview = true;
    });
    user.quests.forEach((quest) => {
      quest.preview = true;
      quest.user = user;
    });
  }

  async function refresh(code:string) {
    try {
      const res = await api.get('preview', { params: { code } });
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
    if (actualUser) {
      setUser(undefined);
    }
  }, [user, actualUser]);

  return (
    <previewContext.Provider value={{
      user,
      refresh,
    }}
    >
      {children}
    </previewContext.Provider>
  );
}

export function usePreview() {
  return useContext(previewContext);
}
