import {
  Context, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { useLocation } from '../location/LocationContext';
import { useTextSearchContext } from '../search/TextSearchContext';

export type Filters = {[key:string]:any}

interface PageData{
  page:number
  nextPage:number|null
  totalCount:number
  totalPages:number
}

export interface ItemsContext<T>{
  items?:T[]
  reset:()=>void
  loading:boolean
  filters?:Filters
  pageData?:PageData
  setLoading: Dispatch<SetStateAction<boolean>>
  setItems: Dispatch<SetStateAction<T[]|undefined>>
  loadMore:(callback?:(pageData:PageData)=>void)=>void
  setFilters: Dispatch<SetStateAction<Filters|undefined>>
  setPageData: Dispatch<SetStateAction<PageData|undefined>>
}

interface PaginationProviderProps<T>{
  children:ReactNode
  apiRoute:string
  Context:Context<ItemsContext<T>>
}

export function PaginationProvider<T>({ children, Context, apiRoute }:PaginationProviderProps<T>) {
  const { text } = useTextSearchContext();
  const [items, setItems] = useState<T[]>();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>();
  const [pageData, setPageData] = useState<PageData>();

  const { location } = useLocation();

  async function loadMore(callback?:(pageData:PageData)=>void) {
    if (loading || pageData?.nextPage === null) return;
    setLoading(true);
    const locationParams = location ? {
      radius: location.radius,
      latitude: location.position[0],
      longitude: location.position[1],
    } : undefined;
    const res = await api.get(apiRoute, {
      params: {
        text,
        ...filters,
        ...locationParams,
        page: pageData?.nextPage,
      },
    });
    setPageData(res.data.pageData);
    setItems((items?:T[]) => (items || []).concat(res.data.content));
    setLoading(false);
    if (callback) {
      callback(res.data.pageData);
    }
  }

  function reset() {
    setItems(undefined);
    setPageData(undefined);
  }

  useEffect(() => {
    reset();
  }, [
    text,
    filters,
    location,
  ]);

  useEffect(() => {
    if (!pageData && location) {
      loadMore();
    }
  }, [pageData, location]);

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
