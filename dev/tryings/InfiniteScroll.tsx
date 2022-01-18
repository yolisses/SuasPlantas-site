import { useEffect, useRef, useState } from 'react';
import { Spinner } from '../../common/Spinner';
import { delay } from '../utils/delay';
import { generateRandomColors } from '../utils/generateRandomColors';

const savedItems = generateRandomColors(34);

interface PageData{
  page:number
  maxPage:number
  totalCount:number
  nextPage:number|null
}

interface IApiResponse{
  content:any[]
  pageData:PageData
}

async function apiResponse(page = 0, take = 10):Promise<IApiResponse> {
  const totalCount = savedItems.length;
  const maxPage = totalCount === 0 ? 0 : Math.ceil(totalCount / take) - 1;
  const start = page * take;
  const end = start + take;
  const content = savedItems.slice(start, end);
  const nextPage = page < maxPage ? page + 1 : null;

  return {
    content,
    pageData: {
      page, maxPage, nextPage, totalCount,
    },
  };
}

function ObserverCore({ callback, thresholdHeight = 100 }:any) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      console.log(e);
      if (e[0].isIntersecting) { callback(); }
    }, { threshold: 0 });
    observer.observe(ref.current as any);
    return () => { observer.disconnect(); };
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref as any}
        style={{ height: `${thresholdHeight}px` }}
        className="absolute bottom-0 w-full"
      />
    </div>
  );
}

function Observer({ loading, callback }:any) {
  if (loading) return null;
  return <ObserverCore callback={callback} />;
}

export function DevPage() {
  const [items, setItems] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<PageData>();
  const hasMore:boolean = !pageData || pageData.nextPage !== null;

  async function getItems() {
    await delay(1000);
    const page = pageData?.nextPage || 0;
    const res = await apiResponse(page);
    setPageData(() => res.pageData);
    setItems((old) => (old ? old.concat(res.content) : [...res.content]));
  }

  async function loadMore() {
    if (loading || !hasMore) return;
    setLoading(true);
    await getItems();
    setLoading(false);
  }

  function reset() {
    setPageData(undefined);
    setItems(undefined);
  }
  return (
    <div>
      {JSON.stringify(pageData)}
      <button onClick={reset}>Reset</button>
      <button onClick={loadMore} disabled={!hasMore}>Load more</button>
      {loading && <Spinner />}
      {!!(items && !items.length) && (<div>Nenhum resultado encontrado</div>)}
      <div className="flex flex-col flex-wrap">
        {!!items && items?.map((item, index) => (
          <div style={{ backgroundColor: item }} className="p-10">
            {index}
            {' '}
            {item}
          </div>
        ))}
      </div>
      <Observer callback={loadMore} loading={loading} />
      {loading && <Spinner />}
    </div>
  );
}
