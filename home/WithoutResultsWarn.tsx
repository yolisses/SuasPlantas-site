import { Button } from '@mui/material';
import { filterStore } from '../search/filtersStore';

export function WithoutResultsWarn() {
  const text = filterStore.query?.text;

  return (
    <div className="flex flex-col items-center max-w-sm">
      <div className="text-xl text-center">
        Nenhuma resultado encontrado
        {text ? ` para "${filterStore.query?.text}"` : ''}
      </div>
      <div className="text-center">
        {text
          ? 'Verifique a ortografia, altere os filtros ou tente usar um termo de pesquisa menos específico.'
          : 'Você pode tentar mudar os filtros de pesquisa.'}
      </div>
      <Button onClick={() => { filterStore.query = {}; }}>Página inicial</Button>
    </div>
  );
}
