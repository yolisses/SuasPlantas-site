import { usePlants } from '../plant/plantsContext';
import { useQuests } from '../quest/questsContext';
import { useTextSearchContext } from '../search/TextSearchContext';

export function WithoutResultsWarn() {
  const { setFilters: setPlantsFilters } = usePlants();
  const { setFilters: setQuestsFilters } = useQuests();
  const { text, setText } = useTextSearchContext();

  return (
    <div className="flex flex-col items-center max-w-md">
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
        className="secondary-button"
        onClick={() => {
          setPlantsFilters(undefined);
          setQuestsFilters(undefined);
          setText(undefined);
        }}
      >
        Limpar pesquisa
      </button>
      )}
    </div>
  );
}
