import { HomePage } from './HomePage';
import { PlantItem } from '../common/PlantItem';
import { PlantsInput } from './input/PlantsInput';
import { plantsContext } from '../plant/plantsContext';
import { useVocative } from './input/useVocative';

export function PlantsPage() {
  const { vocative } = useVocative();
  return (
    <HomePage
      tab="plants"
      context={plantsContext}
      topChildren={(
        <section className="max-w-xl">
          <PlantsInput
            text={(
              <span>
                Quais plantas você
                {' '}
                <strong>tem</strong>
                {vocative}
                ?
              </span>
            )}
          />
        </section>
      )}
    >
      {(items) => (
        <div className="grid gap-2 grid-cols-2 md:grid-cols-5">
          {!!items && items.map((item) => (
            <PlantItem key={item.id} item={item} size={300} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
