import { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { Controller, useForm } from 'react-hook-form';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaCheck, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { useUser } from '../auth/userContext';
import { ContentFooter } from './ContentFooter';
import { TextField } from '../common/TextField';
import { rateIcons } from '../common/rateIcons';
import { useSnack } from '../snack/SnackContext';
import { DirectMessageContact } from './DirectMessageContact';
import { amber500, gray400, green700 } from '../common/colors';

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<any>();
  const { setSnack } = useSnack();
  const { user } = useUser();

  const {
    watch, register, handleSubmit, control,
  } = useForm({
    defaultValues: {
      message: '',
      rating: undefined,
      name: user?.name || '',
      source: 'contact page',
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
    <div className="min-h-screen flex flex-col">
      <div className="center-col p-2 pb-10 flex-1">
        <h1 className="text-3xl">Contato</h1>
        <p className="text-gray-500">Adoramos receber mensagens!</p>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center md:items-start justify-center md:py-4">
          <address className="not-italic py-4 flex flex-col gap-4 w-full max-w-md">
            <div>
              <h2 className="center-row gap-1">
                <BiEnvelope color={green700} />
                Email
              </h2>
              suasplantascontato@gmail.com
            </div>
            <div>
              <h2 className="center-row gap-1">
                <FaWhatsapp color={green700} />
                {' '}
                Telefone/Whatsapp
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link w-full max-w-sm"
                href="https://api.whatsapp.com/send?phone=+55839345-0389"
              >
                +55 83 9345-0389
              </a>
            </div>
            <div>
              <h2 className="center-row gap-1">
                <FaInstagram color={green700} />
                {' '}
                Instagram
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link w-full max-w-sm"
                href="https://www.instagram.com/suas_plantas/"
              >
                @suas_plantas
              </a>
            </div>
            <div>
              <h2 className="center-row gap-1">
                <RiFacebookCircleLine color={green700} />
                {' '}
                Facebook
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link w-full max-w-sm"
                href="https://www.facebook.com/suasplantas.com.br"
              >
                facebook.com/suasplantas.com.br
              </a>
            </div>
            <DirectMessageContact />
          </address>
          <fieldset className="flex flex-col gap-3 items-stretch w-full max-w-md">
            <div>Enviar feedback</div>
            <TextField label="Nome (opcional)" {...register('name')} />
            <TextField label="Email (opcional)" {...register('email')} />
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
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
                            size={32}
                            className="hover:scale-125 transition-transform"
                            color={(field.value === index + 1) ? amber500 : gray400}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                />
              )}
            />
            <TextField label="Mensagem" multiline minRows={2} {...register('message')} />
            {sent
              ? (
                <div className="flex flex-row justify-center items-center gap-2">
                  <FaCheck color={green700} />
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
      <ContentFooter />
    </div>
  );
}
