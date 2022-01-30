import { useSnack } from '../snack/SnackContext';

export function DevPage() {
  const { setSnack } = useSnack();

  return (
    <div>
      <button onClick={() => { setSnack({ text: 'massaka', severity: 'success' }); }}>show snack</button>
    </div>
  );
}
