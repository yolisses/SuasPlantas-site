import Link from 'next/link';
import { useModal } from '../modal/ModalContext';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';

export function SignInBox() {
  const { close } = useModal();
  return (
    <div className="flex flex-col max-w-sm items-center gap-4">
      <div>
        <div>
          Escolha uma forma de continuar.
        </div>
        <strong>É toltamente grátis</strong>
      </div>
      <div className="flex flex-col gap-2">
        <GoogleButton callback={close} />
        <FacebookButton callback={close} />
      </div>
      <div className="text-sm text-gray-600 px-6">
        Ao continuar, você concorda com nossa
        {' '}
        <Link href="/privacy-policy">
          <a className="link" target="_blank">
            Política de Privacidade
          </a>
        </Link>
        .
        {' '}
      </div>
    </div>
  );
}
