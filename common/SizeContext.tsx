import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';

interface SizeContext{
    sm:boolean|null
    md:boolean|null
    lg:boolean|null
    xl:boolean|null
    '2xl':boolean|null
}

type MediaName = 'sm'|'md'|'lg'|'xl'|'2xl'

const sizeContext = createContext({} as SizeContext);

export function SizeContextProvider({ children }:{children:ReactNode}) {
  const medias = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  } as const;

  const [value, setValue] = useState<SizeContext>({
    sm: null, md: null, lg: null, xl: null, '2xl': null,
  });

  function setValueByKey(key:MediaName, value:boolean) {
    setValue((old) => {
      const copy = { ...old };
      copy[key] = value;
      return copy;
    });
  }

  useEffect(() => {
    const cleaners = Object.keys(medias).map((key) => {
      const media = window.matchMedia(medias[key as MediaName]);
      if (media.matches !== value[key as MediaName]) {
        setValueByKey(key as MediaName, media.matches);
      }
      function listener() {
        setValueByKey(key as MediaName, media.matches);
      }
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    });

    return () => { cleaners.forEach((cleaner) => cleaner()); };
  }, []);
  return (
    <sizeContext.Provider value={value}>
      {children}
    </sizeContext.Provider>
  );
}

export function useSize() {
  return useContext(sizeContext);
}
