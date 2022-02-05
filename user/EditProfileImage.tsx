/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormLabel } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { api } from '../api/api';
import { userImage } from '../images/user';
import { Sending } from '../upload/Sending';
import { Spinner } from '../common/Spinner';
import { useUser } from '../auth/userContext';
import { useSnack } from '../snack/SnackContext';
import { useRefresh } from '../utils/useRefresh';

export function EditProfileImage() {
  const imageSize = 80;

  const { setSnack } = useSnack();

  const [sending, setSending] = useState<Sending>();
  const refresh = useRefresh();

  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleFilesSelected = async (e: ChangeEvent<HTMLInputElement>) => {
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
      user!.image = res.data.image;
      setSnack({ severity: 'success', text: 'Foto de perfil alterada com sucesso' });
    } catch (err:any) {
      setSnack({ severity: 'error', text: 'Não foi possível alterar a foto de perfil' });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Image
        width={imageSize}
        height={imageSize}
        className="rounded-full"
        objectFit="cover"
        src={sending?.src || user?.image || userImage}
      />
      <div className="flex flex-col">
        <FormLabel component="legend" className="text-center">Foto de perfil</FormLabel>
        <label className="flex flex-row items-center gap-1">
          <input
            type="file"
            onChange={handleFilesSelected}
            accept=".jpg, .jpeg, .png, .webp"
            hidden
          />
          <div className={`p-2 flex flex-row gap-2 items-center rounded-lg ${loading ? 'disabled-button' : 'secondary-button'}`}>
            {loading && <Spinner />}
            Alterar foto
          </div>
        </label>
      </div>
    </div>
  );
}
