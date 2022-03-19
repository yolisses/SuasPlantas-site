import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';

type lImportsType = typeof import('leaflet')
type rlImportsType = typeof import('react-leaflet')

interface MapImportContext{
  loaded:boolean
  shouldLoad:boolean
  lImports:lImportsType
  rlImports:rlImportsType
  setLoaded:Dispatch<SetStateAction<boolean>>
  setShouldLoad:Dispatch<SetStateAction<boolean>>
}

const mapImportContext = createContext({} as MapImportContext);

export function MapImportContextProvider({ children }:{children:ReactNode}) {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [lImports, setLImports] = useState<lImportsType>();
  const [rlImports, setRlImports] = useState<rlImportsType>();

  async function load() {
    setRlImports(await import('react-leaflet'));
    setLImports(await import('leaflet'));
    setLoaded(true);
  }

  useEffect(() => {
    if (shouldLoad && !loaded) {
      load();
    }
  }, [shouldLoad]);

  return (
    <mapImportContext.Provider value={{
      loaded,
      lImports,
      rlImports,
      setLoaded,
      shouldLoad,
      setShouldLoad,
    }}
    >
      {children}
    </mapImportContext.Provider>
  );
}

export function useMapImport() {
  const result = useContext(mapImportContext);
  result.setShouldLoad(true);
  return result;
}
