import { HomePage } from './HomePage';
import { Plant } from '../plant/Plant';
import { PlantItem } from '../common/PlantItem';
import { PlantsInput } from './input/PlantsInput';
import { plantsContext } from '../plant/plantsContext';

export function PlantsPage() {
  return (
    <HomePage
      tab="plants"
      context={plantsContext}
      topChildren={(
        <section className="max-w-xl">
          <PlantsInput />
        </section>
      )}
    >
      {(items) => (
        <div className="grid gap-2 grid-cols-2 md:grid-cols-5">
          {!!items && items.map((item: Plant) => (
            <PlantItem key={item.id} item={item} size={300} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
