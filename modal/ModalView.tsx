import { useModal } from './ModalContext';

export function ModalView() {
  const { modal } = useModal();
  return (modal || null);
}
