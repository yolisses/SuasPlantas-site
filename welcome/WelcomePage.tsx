/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { WelcomeInput } from './WelcomeInput';
import { useVocative } from '../home/input/useVocative';

export function WelcomePage() {
  const { vocative } = useVocative();

  const imageSize = 24;
  return (
    <div className="center-col min-h-screen gap-2">
      <div className="center-row items-start w-full p-2 text-lg gap-2 select-none">
        <Image src="/icon/icon.svg" width={imageSize} height={imageSize} />
        SuasPlantas
      </div>
      <div className="p-3 flex flex-col gap-4 text-lg w-full max-w-3xl flex-1">
        <h1 className="text-2xl">
          Seja bem vindo(a)
          {vocative}
        </h1>
        <h3 className="text-gray-500">Só duas perguntinhas para deixarmos tudo pronto...</h3>
        <WelcomeInput type="plants" />
        <WelcomeInput type="quests" />
        <div className="flex-1" />
        <button className="secondary-button">Prosseguir</button>
      </div>
    </div>
  );
}
