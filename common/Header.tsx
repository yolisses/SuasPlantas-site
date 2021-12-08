import Link from "next/link";
import { HeaderLayout } from "./HeaderLayout";
import { SearchTop } from "./SearchTop";

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  return (
    <HeaderLayout className="bg-green-700 text-white" goBackButton={false}>
      <div className="mr-auto">
        <Link href="/">
          <div className="text-lg cursor-pointer">Plantes</div>
        </Link>
      </div>
      <SearchTop query={searchQuery} />
      <Link href="/sign-in">
        <div className="text-lg ml-auto">sign in</div>
      </Link>
    </HeaderLayout>
  );
}
