import { StatusPage } from './StatusPage';

export function Status404Page() {
  return (
    <StatusPage
      number={404}
      text="Não foi possível encontrar essa página.
      Ela pode não existir ou estar sob problemas técnicos temporários."
    />
  );
}
