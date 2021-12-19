import Link from "next/link";
import { MeButton } from "../user/MeButton";
import { HeaderLayout } from "./HeaderLayout";
import { FaRegUser } from "react-icons/fa";
import { useModal } from "../modal/ModalContext";
import { SignInBox } from "../auth/SignInBox";

interface HeaderProps {
  searchQuery?: string;
}

export function Header({ searchQuery }: HeaderProps) {
  const { setModal } = useModal();

  return (
    <HeaderLayout className="bg-green-700 text-white" goBackButton={false}>
      <div className="mr-auto">
        <Link href="/">
          <div className="flex flex-row items-center gap-1">
            {/* <div className="self-stretch hidden sm:inline-flex flex justify-center">
              <Image src="/icon-white.png  " width={20} height={20} />
            </div> */}
            <div className="text-lg cursor-pointer">SuasPlantas</div>
          </div>
        </Link>
      </div>
      {/* <SearchTop query={searchQuery} /> */}
      <div className="ml-auto flex justify-center">
        {false ? (
          <MeButton />
        ) : (
          // <Link href="/sign-in">
          <div
            onClick={() => setModal(<SignInBox />)}
            className="flex flex-row items-center gap-1"
          >
            <FaRegUser size={18} />
            <div className="text-lg">Entrar</div>
          </div>
          // </Link>
        )}
      </div>
    </HeaderLayout>
  );
}
