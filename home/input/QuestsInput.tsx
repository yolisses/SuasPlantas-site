import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../api/api';
import { useVocative } from './useVocative';
import { Spinner } from '../../common/Spinner';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { useSnack } from '../../snack/SnackContext';
import { useQuests } from '../../quest/questsContext';

type InputValues = {
  name:string
}

export function QuestsInput() {
  const imageSize = 30;
  const { user } = useUser();
  const { setSnack } = useSnack();
  const { vocative } = useVocative();
  const { reset: resetQuests } = useQuests();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset: resetForm,
  } = useForm<InputValues>();

  async function submit(data:InputValues) {
    console.log(data);
    setLoading(true);
    try {
      await api.post('quests', data);
      setSnack({
        severity: 'success',
        text: 'Sua procura foi adicionada!',
      });
      resetForm();
    } catch (err:any) {
      setSnack({ severity: 'error', text: err.message });
      throw err;
    }
    setLoading(false);
    resetQuests();
  }

  return (
    <div className="p-2 rounded-xl bg-gray-100 w-full h-fit">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg center-row gap-2">
            <Image
              objectFit="cover"
              width={imageSize}
              height={imageSize}
              className="rounded-full"
              src={user?.image || userImageSVG}
            />
            <span>
              Quais plantas você está
              {' '}
              <strong>procurando</strong>
              {vocative}
              ?
            </span>
          </div>
          <div className="gap-2 center-row">
            <form
              className="flex-1 flex flex-col gap-2"
              onSubmit={handleSubmit(submit as SubmitHandler<InputValues>)}
            >
              <input
                {...register('name')}
                type="text"
                autoComplete="off"
                placeholder="Nome da planta"
                className="placeholder-gray-500 bg-white p-3 rounded-lg"
              />
              <div className="center-row">
                <button
                  disabled={loading}
                  className="main-button w-full max-w-sm py-3 shadow text-base"
                >
                  {loading && <Spinner size={24} /> }
                  {loading ? 'Adicionando' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
