import { FaRegBell } from 'react-icons/fa';
import { Step } from 'react-joyride';

export const questsTourSteps:Step[] = [
  {
    disableBeacon: true,
    disableOverlay: true,
    target: '#tour_start',
    floaterProps: { hideArrow: true },
    content: 'Aqui aparecem as plantas que as pessoas estão procurando',
  },
  {
    disableBeacon: true,
    disableOverlay: true,
    target: '#tour_start',
    floaterProps: { hideArrow: true },
    content:
  <div>
    Você também pode adicionar as plantas que está procurando e receber uma
    {' '}
    <FaRegBell className="inline" />
    notificação automática quando a planta estiver disponível
  </div>,
  },
  {
    disableBeacon: true,
    disableOverlay: true,
    disableOverlayClose: false,
    content: 'Para adicionar é só usar esse botão',
    disableScrollParentFix: true,
    target: '#tour_add_button',
  },
];
