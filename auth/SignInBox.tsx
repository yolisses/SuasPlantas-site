import { FacebookButton } from "./FacebookButton";
import { GoogleButton } from "./GoogleButton";

export function SignInBox() {
  return (
    <div className="flex max-w-sm items-center gap-2 py-2">
      <div className="pb-7">Escolha uma conta para continuar</div>
      <GoogleButton />
      <FacebookButton />
      <div className="pb-2 sm:pb-7"></div>
      <div className="text-sm text-gray-600 px-6">
        Ao selecionar uma conta, você concorda com nossos Termos de Uso,
        Política de Privacidade e Política de Cookies.
      </div>
    </div>
  );
}
