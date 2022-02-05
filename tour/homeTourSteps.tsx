import { Step } from 'react-joyride';

export const homeTourSteps:Step[] = [
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
      <strong>
        É grátis e sempre será.
      </strong>
      {' '}
      Gostaria de um passeio pelo site?
    </span>
  </div>,
    disableBeacon: true,
    target: '#tour_start',
    disableOverlay: true,
    floaterProps: { hideArrow: true },
    showSkipButton: true,
    hideCloseButton: true,
    locale: { next: 'Sim', skip: 'Não' },
  },
  {
    disableBeacon: true,
    content: 'Você pode postar plantas clicando nesse botão',
    disableScrollParentFix: true,
    target: '#tour_add_button',
  },
  {
    disableBeacon: true,
    content: 'E pode conferir mais coisas aqui',
    target: '#tour_top_tabs',
  },
];
