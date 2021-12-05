import { FaSearch } from "react-icons/fa";
import Link from "next/link";

interface SearchTopProps {
  query?: string;
}

export function SearchTop({ query }: SearchTopProps) {
  return (
    <Link href="/search">
      <div className="bg-white flex-1 text-black h-9 rounded-full flex flex-row items-center p-3 max-w-md overflow-hidden">
        <div
          className={
            "flex-1 focus:border-transparent outline-none bg-transparent w-full " +
            (query ? "text-black" : "text-gray-400")
          }
        >
          {query || "Pesquisar"}
        </div>
        <FaSearch className="ml-2 flex-shrink-0" />
      </div>
    </Link>
  );
}
