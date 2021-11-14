import { observer } from "mobx-react";
import { useState } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { useData } from "../mobx/DataContext";
import { SearchHistoryButtons } from "./SearchHistoryButtons";
import Link from "next/link";
import { HeaderLayout } from "../common/HeaderLayout";

export const SearchScreen = observer(() => {
  const { searches } = useData();
  const [query, setQuery] = useState<string>("");

  return (
    <div className="px-2 flex gap-2">
      <HeaderLayout>
        <div className="shadow-md rounded-full w-full h-10 border-2 border-gray-200 px-3 flex flex-row items-center">
          <input
            type="text"
            className="outline-none flex-1"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaTimesCircle size={18} color="#aaa" />
        </div>
        <Link href={"/s?q=" + query}>
          <FaSearch
            size={20}
            color="gray"
            onClick={() => {
              searches.searches = [...searches.searches, query];
            }}
          />
        </Link>
      </HeaderLayout>
      <SearchHistoryButtons />
    </div>
  );
});
