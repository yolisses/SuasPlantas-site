/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { WelcomeInput } from './WelcomeInput';
import { useVocative } from '../home/input/useVocative';

interface WelcomeFormData{
  plants:string[]
  quests:string[]
}

export function WelcomePage() {
  const { vocative } = useVocative();

  const { handleSubmit, control } = useForm<WelcomeFormData>();

  async function submit(data:WelcomeFormData) {
    console.log(data);
  }

  const imageSize = 24;
  return (
    <div className="center-col flex-1 gap-2">
      <div className="center-row items-start w-full p-2 text-lg gap-2 select-none">
        <Image src="/icon/icon.svg" width={imageSize} height={imageSize} />
        SuasPlantas
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="p-3 flex flex-col gap-4 text-lg w-full max-w-3xl flex-1"
      >
        <h1 className="text-2xl">
          Seja bem vindo(a)
          {vocative}
        </h1>
        <h3 className="text-gray-500">Só duas perguntinhas para deixarmos tudo pronto...</h3>
        <Controller
          name="plants"
          control={control}
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <WelcomeInput
              type="plants"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="quests"
          control={control}
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <WelcomeInput
              type="quests"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        <div className="flex-1" />
        <button className="secondary-button">
          Prosseguir
        </button>
      </form>
    </div>
  );
}
