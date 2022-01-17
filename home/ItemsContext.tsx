import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';

  interface Items{
      text?:string
      swap?:boolean
      sell?:boolean
  }

export const itemsContext = createContext();

export function ItemsContextProvider({ children }:{children:ReactNode}) {
  const [items, setItems] = useState([]);
  const [pageData, setPageData] = useState();
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
    setItems((items:Plant[]) => items.concat(res.data.content));
    setLoading(false);
  }

  async function reset() {
    setItems([]);
    setPageData();
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
    <itemsContext.Provider value={{
      filters,
      setFilters,
      items,
      setItems,
      pageData,
      setPageData,
      loading,
      setLoading,
      loadMore,
      reset,
    }}
    >
      {children}
    </itemsContext.Provider>
  );
}

export function useItems() {
  return useContext(itemsContext);
}
