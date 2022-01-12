import Image from 'next/image';
import Link from 'next/link';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';

export function SignInPage() {
  return (
    <div className="h-full flex flex-col sm:flex-row">
      <div className="flex flex-col sm:w-1/4 h-36 sm:h-full">
        <Image src="/cover4.jpg" width={1000} height={2000} objectFit="cover" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="h-4 bg-white absolute w-full top-32 rounded-t-full sm:hidden" />
        <div className="flex flex-col gap-3 px-4 sm:py-3 items-start">
          <Link href="/">
            <a>
              <h1 className="text-4xl text-green-600 cursor-pointer">
                SuasPlantas
              </h1>
            </a>
          </Link>
          <h2 className="text-2xl text-gray-700">Trocar mudas de plantas</h2>
        </div>
        <div className="flex flex-col flex-1 items-center pt-24 sm:pt-0 sm:justify-center">
          <div className="flex flex-col max-w-sm items-center gap-2">
            <div>Escolha uma conta para continuar</div>
            <GoogleButton />
            <FacebookButton />
            <div className="pb-2 sm:pb-9" />
            <div className="text-sm text-gray-600 px-6">
              Ao selecionar uma conta, você concorda com nossos Termos de Uso,
              Política de Privacidade e Política de Cookies.
            </div>
          </div>
        </div>
        <div className="text-gray-600 p-3">É de graça, e sempre será</div>
      </div>
    </div>
  );
}
