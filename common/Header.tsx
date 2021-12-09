import Link from "next/link";
import { stores } from "../mobx/DataContext";
import { MeButton } from "../user/MeButton";
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
      <div className="ml-auto flex justify-center">
        {stores.auth.user ? (
          <MeButton />
        ) : (
          <Link href="/sign-in">
            <div className="text-lg">sign in</div>
          </Link>
        )}
      </div>
    </HeaderLayout>
  );
}
