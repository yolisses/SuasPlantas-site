import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { Plant } from '../plant/Plant';

interface Filters{
  text?:string
  swap?:boolean
  sell?:boolean
}

interface PageData{
  page:number
  nextPage:number|null
  totalCount:number
  totalPages:number
}

interface IItemsContext{
  items?:Plant[]
  loading:boolean
  filters?:Filters
  pageData?:PageData
  setLoading: Dispatch<SetStateAction<boolean>>
  setItems: Dispatch<SetStateAction<Plant[]|undefined>>
  setFilters: Dispatch<SetStateAction<Filters|undefined>>
  setPageData: Dispatch<SetStateAction<PageData|undefined>>
  loadMore:()=>void
  reset:()=>void
}

export const itemsContext = createContext({} as IItemsContext);

export function ItemsContextProvider({ children }:{children:ReactNode}) {
  const [items, setItems] = useState<Plant[]>();
  const [pageData, setPageData] = useState<PageData>();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>();

  async function loadMore() {
    console.log('aqui');
    if (loading || pageData?.nextPage === null) return;
    setLoading(true);
    const res = await api.get('plants', {
      params: {
        page: pageData?.nextPage,
        ...filters,
      },
    });
    setPageData(res.data.pageData);
    setItems((items?:Plant[]) => (items || []).concat(res.data.content));
    setLoading(false);
  }

  function reset() {
    setItems([]);
    setPageData(undefined);
  }

  useEffect(() => {
    reset();
  }, [filters]);

  useEffect(() => {
    if (!pageData) {
      loadMore();
    }
  }, [pageData]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <itemsContext.Provider value={{
      items,
      reset,
      filters,
      loading,
      setItems,
      pageData,
      loadMore,
      setFilters,
      setLoading,
      setPageData,
    }}
    >
      {children}
    </itemsContext.Provider>
  );
}

export function useItems() {
  return useContext(itemsContext);
}
