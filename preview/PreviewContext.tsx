import {
  Dispatch,
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';
import { mockUser } from '../mock/mockUser';
import { User } from '../user/User';

interface PreviewContext{
    user?:User
    setUser:Dispatch<SetStateAction<User|undefined>>
}

const previewContext = createContext({} as PreviewContext);

export function PreviewProvider({ children }:{children:ReactNode}) {
  const [user, setUser] = useState<User>(mockUser);
  if (user) {
    user.preview = true;
    user.id = 'preview';
    user.plants.forEach((plant) => { plant.preview = true; });
    user.quests.forEach((quest) => {
      quest.preview = true;
      quest.user = user;
    });
  }

  return (
    <previewContext.Provider value={{ user, setUser }}>
      {children}
    </previewContext.Provider>
  );
}

export function usePreview() {
  return useContext(previewContext);
}
