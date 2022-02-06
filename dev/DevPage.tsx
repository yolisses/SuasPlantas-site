import { SelectedImageItem } from '../images/SelectedImageItem';
import { someImage } from '../mock/someImage';
import { useNotifications } from '../notification/notificationsContext';

export function DevPage() {
  const { items } = useNotifications();

  return (
    <div>
      {JSON.stringify(items)}
    </div>
  );
}
