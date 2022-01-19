import { GridItem } from '../common/GridItem';
import { plantsContext } from '../plant/plantsContext';
import { HomePage } from './HomePage';

export function PlantsPage() {
  return (
    <HomePage
      context={plantsContext}
      tab="plants"
      fabPath="plants/add"
    >
      {(items) => (
        <div className="p-2 pt-4 grid gap-2 grid-cols-2 md:grid-cols-5 xl:px-20">
          {!!items && items.map((item: Plant) => (
            <GridItem key={item.id} item={item} size={300} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
