/* eslint-disable no-param-reassign */
import {
  useState,
  ReactNode,
  useContext,
  createContext,
} from 'react';
import { api } from '../api/api';
import { User } from '../user/User';

interface PreviewContext{
    user?:User
    refresh:(code:string)=>void
}

const previewContext = createContext({} as PreviewContext);

export function PreviewProvider({ children }:{children:ReactNode}) {
  const [user, setUser] = useState<User>();
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
    console.log(code);
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
