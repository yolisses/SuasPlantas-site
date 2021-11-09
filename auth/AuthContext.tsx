import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../types/User";

interface IAuthContext {
  user?: User;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
}

const AuthContext = createContext<IAuthContext>({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
