import {
  FormHelperText,
} from '@mui/material';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { useUser } from '../auth/userContext';
import { useSnack } from '../snack/SnackContext';
import { EditProfileImage } from './EditProfileImage';
import { TextField } from '../common/TextField';
import { EditUserLocation } from '../location/EditUserLocation';

export const EditProfilePage = () => {
  const { setUser, user } = useUser();
  const { setSnack } = useSnack();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: user?.name,
      description: user?.description,
      whatsappNumber: user?.whatsappNumber,
      instagramUsername: user?.instagramUsername,
    },
  });

  const [loading, setLoading] = useState(false);

  async function submit(data:any) {
    setLoading(true);
    try {
      const res = await api.patch('users', { ...data });
      setUser(res.data);
      Router.push(`/users/${res.data.id}`);
    } catch (err) {
      setLoading(false);
    }
    setLoading(false);
    setSnack({
      severity: 'success',
      text: 'Dados salvos com sucesso',
    });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 w-full max-w-xl p-2 pt-4">
        <EditProfileImage />
        <TextField
          label="Nome"
          {...register('name')}
        />
        {/* ignore the label */}
        <TextField label="Bio" multiline minRows={2} {...register('description')} />
        <div className="self-start">
          <EditUserLocation />
        </div>
        <div className="flex flex-col">
          <TextField
            label="Instagram"
            {...register('instagramUsername')}
            startAdornment={(
              <>
                <FaInstagram size={25} color="gray" className="inline" />
                <span className="text-gray-500">
                  @
                </span>
              </>
              )}
          />
          {!!watch('instagramUsername') && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://instagram.com/${watch('instagramUsername')}`}
          >
            <button className="secondary-button px-5">
              Testar
              {' '}
              @
              {watch('instagramUsername')}
            </button>
          </a>
          )}
        </div>
        <div className="flex flex-col">
          <TextField
            label="Whatsapp"
            type="number"
            {...register('whatsappNumber')}
            startAdornment={(<FaWhatsapp size={25} color="gray" />)}
          />
          {!!watch('whatsappNumber') && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${watch('whatsappNumber')}`}
            >
              <button className="secondary-button px-5">
                Testar
                {' '}
                {watch('whatsappNumber')}
              </button>
            </a>
          )}
        </div>
        <FormHelperText>
          Essas informações ficam visíveis para as outras pessoas
        </FormHelperText>
        <button onClick={handleSubmit(submit)} disabled={loading} className="h-11 main-button">
          {loading && <Spinner size={20} />}
          Salvar
        </button>
      </div>
    </div>
  );
};
