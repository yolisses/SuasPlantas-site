import { HomePage } from './HomePage';
import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { PlantItem } from '../common/PlantItem';
import { useTour } from '../tour/TourContext';
import { homeTourSteps } from '../tour/homeTourSteps';
import { plantsContext } from '../plant/plantsContext';

export function PlantsPage() {
  const { blockHomeTour } = useTour();

  return (
    <HomePage
      tab="plants"
      tourName="Home"
      context={plantsContext}
      firstActionButton={<AddButton url="plants/add" />}
      tourSteps={!blockHomeTour ? homeTourSteps : undefined}
    >
      {(items) => (
        <div className="p-2 grid gap-2 grid-cols-2 md:grid-cols-5">
          {!!items && items.map((item: Plant) => (
            <PlantItem key={item.id} item={item} size={300} />
          ))}
        </div>
      )}
    </HomePage>
  );
}
