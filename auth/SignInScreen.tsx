import { observer } from "mobx-react";
import Image from "next/image";
import { GoogleButton } from "./GoogleButton";

export const SignInScreen = observer(() => {
  return (
    <div className="h-full flex sm:flex-row">
      <div className="flex sm:w-1/4 h-36 sm:h-full">
        <Image
          src="/cover4.jpg"
          width={1000}
          height={20000}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-1">
        <div className="h-4 bg-white absolute w-full top-32 rounded-t-full sm:hidden" />
        <div className="gap-2 px-4 sm:py-3">
          <h1 className="text-4xl text-green-700">Plantes</h1>
          <h2 className="text-2xl text-green-700">Trocar mudas de plantas</h2>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex max-w-sm items-stretch gap-2">
            <div>Escolha uma conta para continuar</div>
            <GoogleButton />
            <GoogleButton />
            <div className="pb-14"></div>
          </div>
        </div>
        <div className="text-gray-600 p-3">É de graça, e sempre será</div>
      </div>
    </div>
  );
});
