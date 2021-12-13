import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { MeButton } from "../user/MeButton";
import { HeaderLayout } from "./HeaderLayout";
import { SearchTop } from "./SearchTop";
import Image from "next/image";

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
          <div className="flex flex-row items-center gap-1">
            <div className="self-stretch hidden sm:inline-flex flex justify-center">
              <Image src="/icon/icon-white.png  " width={20} height={20} />
            </div>
            <div className="text-lg cursor-pointer">SuasPlantas</div>
          </div>
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
