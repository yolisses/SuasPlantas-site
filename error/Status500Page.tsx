import { StatusPage } from './StatusPage';

export function Status500Page() {
  return (
    <StatusPage
      number={500}
      text="Não foi possível carregar essa página.
      Ela pode estar sob problemas técnicos temporários."
    />
  );
}
