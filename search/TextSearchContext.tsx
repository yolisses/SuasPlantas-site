import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

interface ITextSearchContext{
    text?:string
    setText:Dispatch<SetStateAction<string|undefined>>
}

export const textSearchContext = createContext({} as ITextSearchContext);

export function TextSearchContextProvider({ children }:{children:ReactNode}) {
  const [text, setText] = useState<string>();
  return (
    <textSearchContext.Provider value={{ text, setText }}>
      {children}
    </textSearchContext.Provider>
  );
}

export function useTextSearchContext() {
  return useContext(textSearchContext);
}
