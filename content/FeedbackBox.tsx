import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { useUser } from '../auth/userContext';
import { TextField } from '../common/TextField';
import { useSnack } from '../snack/SnackContext';
import { rateIcons } from '../common/rateIcons';

export function FeedbackBox({ source }:{source:string}) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<any>();
  const { setSnack } = useSnack();
  const { user } = useUser();

  const {
    watch, register, handleSubmit, control,
  } = useForm({
    defaultValues: {
      source,
      message: '',
      rating: undefined,
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  async function submit(data:any) {
    setLoading(true);
    try {
      await api.post('feedback', {
        ...data,
      });
      setSent(true);
    } catch (err:any) {
      setSnack({ severity: 'error', text: err.message });
    }
    setLoading(false);
  }

  return (
    <div className="center-col p-2">
      <div className="flex flex-col md:flex-row gap-4 w-full items-center md:items-start justify-center md:py-4">
        <fieldset className="flex flex-col gap-3 items-stretch w-full max-w-md">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div className="flex flex-row gap-1">
                {rateIcons.map((Icon, index) => (
                  <button
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="rounded-full"
                    onClick={() => {
                      field.onChange({ target: { value: index + 1 } });
                    }}
                  >
                    <Icon
                      className="hover:scale-125 transition-transform"
                      size={32}
                      color={(field.value === index + 1) ? '#ffb000' : '#999'}
                    />
                  </button>
                ))}
              </div>
            )}
          />
          <TextField label="Escrever mensagem" multiline minRows={2} {...register('message')} />
          <TextField type="email" label="Email (opcional)" {...register('email')} />
          {sent
            ? (
              <div className="flex flex-row justify-center items-center gap-2">
                <FaCheck color="green" />
                Enviado
              </div>
            )
            : (
              <button
                onClick={handleSubmit(submit)}
                className="main-button"
                disabled={loading || (!watch('message') && !watch('rating'))}
              >
                { loading && <Spinner size={20} />}
                Enviar!
              </button>
            )}
        </fieldset>
      </div>
    </div>
  );
}
