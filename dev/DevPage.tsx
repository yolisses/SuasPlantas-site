import Link from 'next/link';
import { useModal } from '../modal/ModalContext';
import { useSnack } from '../snack/SnackContext';

export function DevPage() {
  const { setModal } = useModal();
  const { setSnack } = useSnack();

  return (
    <div>
      <Link href="/">
        <button onClick={() => setSnack({ severity: 'success', text: 'chiforínfola' })}>open</button>
      </Link>
      <button onClick={() => setSnack({ severity: 'error', text: 'ispiritiquibé' })}>open</button>
      <button onClick={() => setModal(false)}>close</button>
    </div>
  );
}
