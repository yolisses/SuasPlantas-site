import Link from 'next/link';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';
import { useNotifications } from './notificationsContext';

export function NotificationsMenu({ closeMenu }:{closeMenu:()=>void}) {
  const {
    items, reset, loadMore, pageData,
  } = useNotifications();

  if (!items) {
    return (
      <div className="flex flex-col gap-2 items-center whitespace-nowrap">
        <Spinner radius={30} />
        Carregando notificações
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center text-gray-500 whitespace-nowrap">
        Sem notificações para mostrar
      </div>
    );
  }

  return (
    <InfiniteScroll
      next={loadMore}
      dataLength={items?.length || 0}
      hasMore={!!pageData?.nextPage}
      scrollThreshold={0.8}
      loader={(<div />)}
    >
      {items.map((notification) => {
        const { entity, id } = notification;
        if (!entity) return null;
        return (
          <Link href={`/plants/${notification.entityId}`}>
            <a
              className="menu-button"
              onClick={async () => {
                closeMenu();
                if (notification.viewed === false) {
                  await api.patch(`notifications/${id}/viewed`);
                  reset();
                }
              }}
            >
              <div className="aspect-square h-12">
                <Image
                  width={128}
                  height={128}
                  src={entity.card}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-screen max-w-sm whitespace-normal text-left">
                Nova planta que você pode estar procurando:
                {' '}
                {entity.name}
              </div>
              {(notification.viewed === false) && (
              <div>
                <div className="bg-green-500 h-3 w-3 rounded-full" />
              </div>
              )}
            </a>
          </Link>
        );
      })}
    </InfiniteScroll>
  );
}
