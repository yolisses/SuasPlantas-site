import Image from 'next/image';
import { Notification } from './Notification';
import { userImage } from '../images/user';

interface NotificationItemProps{
    item: Notification
}

export function NotificationItem({ item }:NotificationItemProps) {
  const size = 20;
  return (
    <div className="menu-button">
      <Image width={size} height={size} src={userImage} />
      <span>
        Uma nova planta que você pode estar procurando foi adicionada
        {item.userId}
      </span>
      <div className="bg-red-500 w-2 h-2 rounded-full">quale</div>
    </div>
  );
}
