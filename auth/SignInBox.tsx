import Link from 'next/link';
import { useModal } from '../modal/ModalContext';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';

export function SignInBox() {
  const { close } = useModal();
  return (
    <div className="flex flex-col max-w-sm items-center gap-2 py-2">
      <div className="pb-5">Escolha uma forma de continuar</div>
      <GoogleButton callback={close} />
      <FacebookButton callback={close} />
      <div className="pb-2 sm:pb-5" />
      <div className="text-sm text-gray-600 px-6">
        Ao selecionar uma conta, você concorda com nossa
        {' '}
        <Link href="/privacy-policy">
          <a className="link" target="_blank">
            Política de Privacidade
          </a>
        </Link>
        .
      </div>
    </div>
  );
}
