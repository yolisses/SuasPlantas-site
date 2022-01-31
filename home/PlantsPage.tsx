import { HomePage } from './HomePage';
import { Plant } from '../plant/Plant';
import { GridItem } from '../common/GridItem';
import { useTour } from '../tour/TourContext';
import { homeTourSteps } from '../tour/homeTourSteps';
import { plantsContext } from '../plant/plantsContext';

export function PlantsPage() {
  const { blockHomeTour } = useTour();

  return (
    <HomePage
      tab="plants"
      tourName="Home"
      fabPath="plants/add"
      context={plantsContext}
      tourSteps={!blockHomeTour ? homeTourSteps : undefined}
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
