import { Modal } from '../modal/Modal';
import { FeedbackBox } from './FeedbackBox';

export function FeedbackModal() {
  return (
    <Modal closeOnClickOut={false}>
      <div className="px-2">
        <h2 className="text-lg">Poderia nos contar o que achou do site?</h2>
        <div>Sua opinião é muito importante para nós</div>
        <FeedbackBox />
      </div>
    </Modal>
  );
}
