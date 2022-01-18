import {
  Context, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import { api } from '../api/api';

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

export interface IItemsContext<T>{
  items?:T[]
  loading:boolean
  filters?:Filters
  pageData?:PageData
  setLoading: Dispatch<SetStateAction<boolean>>
  setItems: Dispatch<SetStateAction<T[]|undefined>>
  setFilters: Dispatch<SetStateAction<Filters|undefined>>
  setPageData: Dispatch<SetStateAction<PageData|undefined>>
  loadMore:()=>void
  reset:()=>void
}

interface PaginationProviderProps<T>{
  children:ReactNode
  apiRoute:string
  Context:Context<IItemsContext<T>>
}

export function PaginationProvider<T>({ children, Context, apiRoute }:PaginationProviderProps<T>) {
  const [items, setItems] = useState<T[]>();
  const [pageData, setPageData] = useState<PageData>();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>();

  async function loadMore() {
    if (loading || pageData?.nextPage === null) return;
    setLoading(true);
    const res = await api.get(apiRoute, {
      params: {
        page: pageData?.nextPage,
        ...filters,
      },
    });
    setPageData(res.data.pageData);
    setItems((items?:T[]) => (items || []).concat(res.data.content));
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
    <Context.Provider value={{
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
    </Context.Provider>
  );
}
