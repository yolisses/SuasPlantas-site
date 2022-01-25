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
      Uma nova planta que você pode estar procurando foi adicionada
      {item.userId}
    </div>
  );
}
