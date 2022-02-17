import { parseCookies, setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { FacebookButton } from '../contact/FacebookButton';
import { Fuser } from '../fusers/Fuser';
import { useFusers } from '../fusers/fusersContext';
import { useModal } from '../modal/ModalContext';
import { useSnack } from '../snack/SnackContext';

const MAX_REMOVE_COUNT = 5;

export function UserModal({ fuser }:{fuser:Fuser}) {
  const [loading, setLoading] = useState(false);
  const { reset } = useFusers();
  const { setModal } = useModal();
  const { setSnack } = useSnack();
  const [removeCount, setRemoveCount] = useState<string>();

  useEffect(() => {
    const cookies = parseCookies();
    setRemoveCount(cookies['suasplantas.removeCount']);
  }, []);

  async function removeSelf() {
    setLoading(true);
    try {
      await api.delete(`fusers/${fuser.id}`);
      setCookie(undefined, 'suasplantas.removeCount', `${removeCount || ''}+`, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 365 * 20, // twenty years
      });
      reset();
      setModal(undefined);
      setSnack({ severity: 'success', text: 'Perfil removido com sucesso' });
    } catch (err) {
      setSnack({ severity: 'error', text: 'Status 500: Internal server error' });
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="text-xl">
        {fuser.name}
      </div>
      <div className="text-lg">
        {fuser.city.name}
        {' '}
        -
        {' '}
        {fuser.city.stateId}
      </div>
      <div className="px-40" />
      {(removeCount === undefined || (removeCount?.length < MAX_REMOVE_COUNT))
      && (
      <div className="flex flex-row justify-end">
        <button
          onClick={() => removeSelf()}
          disabled={loading}
          className="text-red-800 inline text-sm flex flex-row items-center justify-center"
        >
          {loading && <Spinner size={20} />}
          <span>
            Sou eu, excluir
          </span>
        </button>
      </div>
      )}
      <FacebookButton facebookId={fuser.id} />
    </div>
  );
}
