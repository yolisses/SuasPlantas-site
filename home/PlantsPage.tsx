import { HomePage } from './HomePage';
import { Plant } from '../plant/Plant';
import { AddButton } from './AddButton';
import { GridItem } from '../common/GridItem';
import { useTour } from '../tour/TourContext';
import { homeTourSteps } from '../tour/homeTourSteps';
import { plantsContext } from '../plant/plantsContext';
import { usePreview } from '../preview/PreviewContext';

export function PlantsPage() {
  const { blockHomeTour } = useTour();
  const { user } = usePreview();

  return (
    <HomePage
      tab="plants"
      tourName="Home"
      context={plantsContext}
      aditionalItems={user?.plants}
      firstActionButton={<AddButton url="plants/add" />}
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
