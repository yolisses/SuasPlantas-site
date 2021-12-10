import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { MeButton } from "../user/MeButton";
import { HeaderLayout } from "./HeaderLayout";
import { SearchTop } from "./SearchTop";

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  const ME = gql`
    {
      me {
        id
      }
    }
  `;

  const { data } = useQuery(ME);

  return (
    <HeaderLayout className="bg-green-700 text-white" goBackButton={false}>
      <div className="mr-auto">
        <Link href="/">
          <div className="text-lg cursor-pointer">Plantes</div>
        </Link>
      </div>
      <SearchTop query={searchQuery} />
      <div className="ml-auto flex justify-center">
        {data?.me ? (
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
