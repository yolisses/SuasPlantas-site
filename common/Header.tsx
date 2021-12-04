import Link from "next/link";
import { GoBackButton } from "./GoBackButton";
import { HeaderLayout } from "./HeaderLayout";
import { SearchTop } from "./SearchTop";

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  return (
    <HeaderLayout className="bg-green-700 text-white" goBackButton={false}>
      <Link href="/">
        <div className="text-lg">Plantes</div>
      </Link>
      <SearchTop query={searchQuery} />
      <div className="flex-1"></div>
      <Link href="/sign-in">
        <div className="text-lg">sign in</div>
      </Link>
    </HeaderLayout>
  );
}
