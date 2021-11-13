import Link from "next/link";
import { SearchTop } from "./SearchTop";

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  return (
    <div className="bg-green-700 text-white h-14 px-2 items-center flex flex-row justify-between select-none gap-2">
      <Link href="/">
        <div className="text-lg">Plantes</div>
      </Link>
      <SearchTop query={searchQuery} />
      <Link href="/sign-in">
        <div className="text-lg">sign in</div>
      </Link>
    </div>
  );
}
