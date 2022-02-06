import { SelectedImageItem } from '../images/SelectedImageItem';
import { someImage } from '../mock/someImage';

export function DevPage() {
  return (
    <div>

      <SelectedImageItem src={someImage} />
    </div>
  );
}
