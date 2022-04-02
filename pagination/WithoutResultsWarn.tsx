import { usePlants } from '../plant/plantsContext';
import { useTextSearchContext } from '../search/TextSearchContext';

export function WithoutResultsWarn() {
  const { text, setText } = useTextSearchContext();
  const { setFilters: setPlantsFilters } = usePlants();

  function handleClearClick() {
    setText(undefined);
    setPlantsFilters(undefined);
  }

  return (
    <div className="center-col max-w-md">
      <div className="text-xl text-center">
        Nenhuma resultado encontrado nessa região
        {' '}
        {!!text && (
        <>
          para
          {' '}
          <strong>{text}</strong>
        </>
        )}
      </div>
      <div className="text-center">
        {text
          ? 'Verifique a ortografia, altere os filtros, ou tente usar um termo de pesquisa menos específico.'
          : 'Você pode tentar mudar os filtros de pesquisa.'}
      </div>
      {!!text && (
      <button
        onClick={handleClearClick}
        className="secondary-button"
      >
        Limpar pesquisa
      </button>
      )}
    </div>
  );
}
