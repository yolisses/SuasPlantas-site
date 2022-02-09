import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { TextField } from '../common/TextField';
import { useSnack } from '../snack/SnackContext';
import { allImagesSent } from '../images/allImagesSent';
import { ImagesInput, SendingsCollection } from '../images/ImagesInput';

export function AddUserPage() {
  const [loading, setLoading] = useState(false);
  const { setSnack } = useSnack();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      images: {} as SendingsCollection,
    },
  });

  async function submit(data:any) {
    const { name, images } = data;
    setLoading(true);
    await allImagesSent(images);
    const image = Object.values(images as SendingsCollection)[0];
    try {
      await api.post('users/by-profile', {
        name,
        image,
      });
    } catch (err:any) {
      setSnack({ severity: 'error', text: JSON.stringify(err) });
    }
    setSnack({ severity: 'success', text: 'Usuário adicionado com sucesso' });
    setLoading(false);
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <h1>Adicionar usuário</h1>
      <div className="w-full max-w-md flex flex-col gap-4">
        <TextField label="nome" {...register('name')} />
        <ImagesInput onChange={(e) => console.log(e)} />
        <button
          onClick={handleSubmit(submit)}
          className="main-button"
          disabled={loading}
        >
          {loading
          && <Spinner size={25} />}
          Adicionar
        </button>
      </div>
    </div>
  );
}
