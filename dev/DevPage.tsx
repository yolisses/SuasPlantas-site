import Joyride, { Step } from 'react-joyride';
import { mainColor } from '../common/mainColor';
import { AddButton } from '../home/AddButton';

export function DevPage() {
  const steps:Step[] = [
    {
      content:
  <div>
    <span>
      <strong>
        Olá!
      </strong>
      {' '}
      Aqui no Suas Plantas você pode postar e encontrar plantas para trocar.
      {' '}
      Gostaria de dar um passeio pelo site?
    </span>
  </div>,
      disableBeacon: true,
      target: '#tour_start',
      disableOverlay: true,
      floaterProps: { hideArrow: true },
      locale: {
        next: 'Sim',
      },
    },
    {
      content: 'Você pode postar plantas clicando nesse botão',
      disableBeacon: true,
      target: '#tour_add_plant',
      // disableOverlay: true,
    },
  ];

  return (
    <div>
      <Joyride
        steps={steps}
        continuous
        styles={{
          buttonNext: {
            padding: '0.75rem',
            backgroundColor: mainColor,
          },
          buttonBack: {
            padding: '0.75rem',
            color: mainColor,
          },
          buttonClose: {
            padding: '0.75rem',
          },
          buttonSkip: {
            padding: '0.75rem',
          },
        }}
        locale={{
          close: 'Fechar',
          next: 'Próximo',
          last: 'Entendi',
          back: 'Voltar',
        }}
      />
      <span className="bg-white">
        coisa escrita
      </span>
      <div id="tour_start" className="fixed bottom-0" />
      <div className="fixed bottom-0 right-0">
        <div id="tour_add_plant" className="mb-10 mr-10">
          <AddButton url="#" />
        </div>
      </div>
    </div>
  );
}
