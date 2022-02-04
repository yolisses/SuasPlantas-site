import ReactJoyride, { Step } from 'react-joyride';
import { mainColor } from '../common/mainColor';
import { TourName, useTour } from './TourContext';

interface TourProps{
    steps: Step[]
    tourName?:TourName
}

export function Tour({
  steps,
  tourName,
}:TourProps) {
  const { blockTour } = useTour();
  return (
    <ReactJoyride
      steps={steps}
      continuous
      callback={(e) => {
        if (tourName && e.action === 'reset') {
          blockTour(tourName);
        }
      }}
      disableScrolling
      styles={{
        tooltipFooter: {
          marginTop: 0,
        },
        tooltip: {
          boxShadow: '0 0 30px #0001',
        },
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
          color: mainColor,
        },
      }}
      locale={{
        back: 'Voltar',
        next: 'Próximo',
        last: 'Entendi',
        close: 'Fechar',
      }}
    />
  );
}
