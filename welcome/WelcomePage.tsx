/* eslint-disable jsx-a11y/label-has-associated-control */
import { useVocative } from '../home/input/useVocative';
import { WelcomeInput } from './WelcomeInput';

export function WelcomePage() {
  const { vocative } = useVocative();
  return (
    <div className="p-4 flex flex-col gap-4 text-xl">
      <h1 className="text-2xl">
        Seja bem vindo(a) ao Suas Plantas
        {vocative}
        .
      </h1>
      <h3 className="text-base">Só duas perguntinhas para deixarmos tudo pronto</h3>
      <WelcomeInput type="plants" />
      <WelcomeInput type="quests" />
      <button className="secondary-button">Prosseguir</button>
    </div>
  );
}
