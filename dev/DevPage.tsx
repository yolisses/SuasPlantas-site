import { useModal } from '../modal/ModalContext';

export function DevPage() {
  const { setModal } = useModal();

  return (
    <div>
      <button onClick={() => setModal(<div>madelline</div>)}>open</button>
      <button onClick={() => setModal(false)}>close</button>
    </div>
  );
}
