import { useState } from 'react';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import { SearchHistoryButtons } from './SearchHistoryButtons';
import { HeaderLayout } from '../common/HeaderLayout';

export function SearchPage() {
  let searches:any[] = [];
  const [query, setQuery] = useState<string>('');

  return (
    <div className="flex gap-2">
      <HeaderLayout>
        <div className="shadow-md rounded-full w-full h-10 border-2 border-gray-200 px-3 flex flex-row items-center">
          <input
            type="text"
            className="outline-none flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaTimesCircle size={18} color="#aaa" />
        </div>
        <Link href={`/search/${query}`}>
          <FaSearch
            size={20}
            color="gray"
            onClick={() => {
              searches = [...searches, query];
            }}
          />
        </Link>
      </HeaderLayout>
      <div className="p-2">
        <SearchHistoryButtons />
      </div>
    </div>
  );
}