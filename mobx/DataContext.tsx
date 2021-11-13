import { createContext, ReactChild, useContext } from "react";
import { auth } from "../auth/auth";
import { searches } from "../search/searches";

const stores = { auth, searches };

const DataContext = createContext(stores);

export function DataContextProvider({ children }: { children: ReactChild }) {
  return <DataContext.Provider value={stores}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
