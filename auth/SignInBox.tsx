import { TextLink } from '../common/TextLink';
import { modalStore } from '../modal/modalStore';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';

export function SignInBox() {
  function handleSuccess() {
    modalStore.close();
  }
  return (
    <div className="flex flex-col max-w-sm items-center gap-2 py-2">
      <div className="pb-5">Escolha uma conta para continuar</div>
      <GoogleButton callback={handleSuccess} />
      <FacebookButton callback={handleSuccess} />
      <div className="pb-2 sm:pb-5" />
      <div className="text-sm text-gray-600 px-6">
        Ao selecionar uma conta, você concorda com nossa
        {' '}
        <TextLink href="/privacy-policy" defaultAElement target="_blank">
          Política de Privacidade
        </TextLink>
        .
      </div>
    </div>
  );
}
