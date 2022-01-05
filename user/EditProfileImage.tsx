/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, CircularProgress, FormLabel } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { api } from '../api/api';
import { userImage } from '../images/user';
import { Sending } from '../upload/Sending';
import { authStore } from '../auth/authStore';
import { snackStore } from '../snack/snackStore';
import { useRefresh } from '../utils/useRefresh';

export function EditProfileImage() {
  const imageSize = 80;

  const [sending, setSending] = useState<Sending>();
  const refresh = useRefresh();

  const [loading, setLoading] = useState(false);

  const handleFilesSelected = async (e: ChangeEvent<HTMLInputElement>): void => {
    setLoading(true);
    if (!e.target.files) return;
    const file = e.target.files[0];
    const sending = new Sending({
      file,
      onUpdate: refresh,
    });
    setSending(sending);

    await sending!.sendPromise;
    try {
      const res = await api.patch('users', { image: sending.key });
      authStore.user!.image = res.data.image;
      snackStore.success('Foto de perfil alterada com sucesso');
    } catch (err:any) {
      snackStore.error('Não foi possível alterar a foto de perfil');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Image src={sending?.src || authStore.user?.image || userImage} width={imageSize} height={imageSize} className="rounded-full" />
      <div className="flex flex-col">
        <FormLabel component="legend" className="text-center">Foto de perfil</FormLabel>
        <label className="flex flex-row items-center gap-1">
          <input
            type="file"
            onChange={handleFilesSelected}
            accept=".jpg, .jpeg, .png, .webp"
            hidden
          />
          <Button disabled={loading} component="span" className="flex flex-row items-center gap-1">
            {loading && <CircularProgress size={25} />}
            Alterar foto
          </Button>
        </label>
      </div>
    </div>
  );
}
