import Joyride, { Step } from 'react-joyride';
import { mainColor } from '../common/mainColor';

const steps:Step[] = [
  {
    content:
  <div>
    <span>
      <strong>
        Olá!
      </strong>
      {' '}
      Aqui no
      {' '}
      <strong>
        Suas Plantas
      </strong>
      {' '}
      você pode postar e encontrar plantas para trocar.
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
    // disableBeacon: true,
    disableScrollParentFix: true,
    target: '#tour_add_button',
  },
  {
    disableBeacon: true,
    content: 'Você pode conferir mais coisas aqui',
    target: '#tour_top_tabs',
  },
];

export function HomeTour() {
  return (
    <Joyride
      steps={steps}
      continuous
      disableScrolling
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
  );
}
