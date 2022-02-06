import { Snack } from '../snack/Snack';

export function DevPage() {
  return (
    <div>
      <Snack snack={{ text: 'adicionado com sucesso', severity: 'success' }} />
    </div>
  );
}
