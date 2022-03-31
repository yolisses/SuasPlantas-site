import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { FaFileAlt, FaImage } from 'react-icons/fa';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../api/api';
import { useVocative } from './useVocative';
import { Spinner } from '../../common/Spinner';
import { green500, green600 } from '../../common/colors';
import { useUser } from '../../auth/UserContext';
import { userImageSVG } from '../../images/user';
import { useSnack } from '../../snack/SnackContext';
import { usePlants } from '../../plant/plantsContext';
import { ImagesInput } from '../../images/ImagesInput';
import { allImagesSent } from '../../images/allImagesSent';
import { SendingsCollection } from '../../images/SendingsCollection';

type InputValues = {
  name:string
  description?:string
  images:SendingsCollection
}

const defaultVisible = {
  images: false,
  description: false,
};

export function PlantsInput() {
  const imageSize = 30;
  const { user } = useUser();
  const { setSnack } = useSnack();
  const { vocative } = useVocative();
  const { reset: resetPlants } = usePlants();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(defaultVisible);

  const {
    control,
    register,
    handleSubmit,
    reset: resetForm,
  } = useForm<InputValues>({ defaultValues: { images: {} } });

  function getToggle(key:keyof typeof defaultVisible) {
    return function toggle(e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
      e.preventDefault();
      setVisible((values) => {
        const copy = { ...values };
        copy[key] = !copy[key];
        return copy;
      });
    };
  }

  async function submit(data:InputValues) {
    setLoading(true);
    try {
      await allImagesSent(data.images);
      const images = Object.values(data.images).map((value) => (value).uri);
      await api.post('plants', { ...data, images });
      setSnack({
        severity: 'success',
        text: 'Sua planta foi adicionada!',
      });
      resetForm();
    } catch (err:any) {
      setSnack({ severity: 'error', text: err.message });
      throw err;
    }
    setLoading(false);
    resetPlants();
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
              src={user.image || userImageSVG}
            />
            <span>
              Quais plantas você
              {' '}
              <strong>tem</strong>
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
                type="text"
                data-hj-allow
                autoComplete="off"
                placeholder="Nome da planta"
                className="placeholder-gray-500 bg-white p-3 rounded-lg"
                {...register('name')}
              />
              {visible.description && (
                <textarea
                  rows={3}
                  data-hj-allow
                  placeholder="Descrição"
                  className="placeholder-gray-500 bg-white p-3 rounded-lg"
                  {...register('description')}
                />
              )}
              {visible.images && (
              <Controller
                name="images"
                control={control}
                render={({
                  field: { onChange, onBlur, value },
                }) => (
                  <ImagesInput
                    onBlur={onBlur}
                    onChange={onChange}
                    initialSendings={value as SendingsCollection}
                  />
                )}
              />
              )}
              <div className="center-row">
                <button className="icon-button" onClick={getToggle('images')}>
                  <FaImage size={20} color={green600} />
                </button>
                <button className="icon-button" onClick={getToggle('description')}>
                  <FaFileAlt size={20} color={green600} />
                </button>
                <button
                  disabled={loading}
                  className="main-button w-full max-w-sm py-3 ml-2 shadow text-base"
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
