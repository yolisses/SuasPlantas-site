import {
  Button,
  TextField,
  FormHelperText,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { observer } from 'mobx-react-lite';
import { api } from '../api/api';
import { Header } from '../common/Header';
import { authStore } from '../auth/authStore';
import { snackStore } from '../snack/snackStore';
import { EditProfileImage } from './EditProfileImage';
import { LocationField } from '../location/LocationField';
import { User } from './User';

export const EditProfilePage = observer(({ user }:{user:User}) => {
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
      authStore.setUser(res.data);
      Router.push(`/users/${res.data.id}`);
    } catch (err) {
      setLoading(false);
    }
    setLoading(false);
    snackStore.setSnack({
      text: 'Dados salvos com sucesso',
      severity: 'success',
    });
  }

  return (
    <>
      <Header />
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
            <LocationField text={`${authStore.user?.city}, ${authStore.user?.state}`} />
          </div>
          <div className="flex flex-col">
            <TextField
              label="Instagram"
              {...register('instagramUsername')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaInstagram size={25} />
                    <span className="pl-2">
                      @
                    </span>
                  </InputAdornment>
                ),
              }}
            />
            {!!watch('instagramUsername') && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${watch('instagramUsername')}`}
              >
                <Button className="self-start px-5">
                  Testar
                  {' '}
                  @
                  {watch('instagramUsername')}
                </Button>
              </a>
            )}
          </div>
          <div className="flex flex-col">
            <TextField
              label="Whatsapp"
              type="number"
              {...register('whatsappNumber')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaWhatsapp size={25} />
                  </InputAdornment>
                ),
              }}
            />
            {!!watch('whatsappNumber') && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${watch('whatsappNumber')}`}
            >
              <Button className="self-start px-5">
                Testar
                {' '}
                {watch('whatsappNumber')}
              </Button>
            </a>
            )}
          </div>
          <FormHelperText>
            Essas informações ficam visíveis para as outras pessoas
          </FormHelperText>
          <Button variant="contained" onClick={handleSubmit(submit)} disabled={loading} className="h-11 flex gap-2">
            {loading && <CircularProgress size={20} />}
            Salvar
          </Button>
        </div>
      </div>
    </>
  );
});
