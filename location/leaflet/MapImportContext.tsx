import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';

type importsType = typeof import('react-leaflet')

interface MapImportContext{
  loaded:boolean
  shouldLoad:boolean
  imports:importsType
  setLoaded:Dispatch<SetStateAction<boolean>>
  setShouldLoad:Dispatch<SetStateAction<boolean>>
}

const mapImportContext = createContext({} as MapImportContext);

export function MapImportContextProvider({ children }:{children:ReactNode}) {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [imports, setImports] = useState<importsType>();

  async function load() {
    const imports = await import('react-leaflet');
    console.log(imports);
    setImports(imports);
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
      imports,
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
