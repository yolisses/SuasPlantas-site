import {
  Dispatch,
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
  useEffect,
} from 'react';
import { api } from '../api/api';
import { User } from '../user/User';

interface PreviewContext{
    user?:User
    setUser:Dispatch<SetStateAction<User|undefined>>
}

const previewContext = createContext({} as PreviewContext);

export function PreviewProvider({ children }:{children:ReactNode}) {
  const [user, setUser] = useState<User>();
  if (user) {
    user.preview = true;
    user.id = 'preview';
    user.plants.forEach((plant) => { plant.preview = true; });
    user.quests.forEach((quest) => {
      quest.preview = true;
      quest.user = user;
    });
  }

  async function refreshUser() {
    try {
      const res = await api.get('preview');
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
      console.log(err);
    }
  }, []);

  return (
    <previewContext.Provider value={{ user, setUser }}>
      {children}
    </previewContext.Provider>
  );
}

export function usePreview() {
  return useContext(previewContext);
}
