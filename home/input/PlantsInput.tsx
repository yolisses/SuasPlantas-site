import Image from 'next/image';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FaFileAlt, FaImage } from 'react-icons/fa';

import { getFirstName } from './getFirstName';
import { useUser } from '../../auth/userContext';
import { userImageSVG } from '../../images/user';
import { ImagesInput } from '../../images/ImagesInput';
import { SendingsCollection } from '../../images/SendingsCollection';

type InputValues = {
  name:string
  description?:string
  images:SendingsCollection
}

export function PlantsInput() {
  const imageSize = 30;
  const { user } = useUser();
  const defaultVisible = { description: false, images: true };
  const [visible, setVisible] = useState(defaultVisible);

  const { register, handleSubmit, control } = useForm<InputValues>({
    defaultValues: {
      images: {},
    },
  });

  function toggle(key:keyof typeof defaultVisible) {
    setVisible((values) => {
      const copy = { ...values };
      copy[key] = !copy[key];
      return copy;
    });
  }

  function submit(data:InputValues) {
    console.log(data);
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
            Quais plantas você tem
            {user ? `, ${getFirstName(user)}` : ''}
            ?
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
              {visible.description && (
                <textarea
                  {...register('description')}
                  rows={3}
                  placeholder="Descrição"
                  className="placeholder-gray-500 bg-white p-3 rounded-lg"
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
                <button className="icon-button" onClick={() => toggle('images')}>
                  <FaImage size={20} color="#080" />
                </button>
                <button className="icon-button" onClick={() => toggle('description')}>
                  <FaFileAlt size={20} color="#080" />
                </button>
                <input
                  type="submit"
                  value="Adicionar"
                  className="main-button max-w-sm ml-2 shadow"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
