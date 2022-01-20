import { useSnack } from './SnackContext';
import { Snack } from './Snack';

export function SnackView() {
  const { snack } = useSnack();
  return (
    <>
      {!!snack && (<Snack snack={snack} />)}
    </>
  );
}
