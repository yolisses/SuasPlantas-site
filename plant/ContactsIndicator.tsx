import Link from 'next/link';
import { User } from '../user/User';
import { useUser } from '../auth/userContext';
import { hasContact } from '../utils/hasContact';
import { InstagramButton } from '../contact/InstagramButton';
import { WhatsappButton } from '../contact/WhatsappButton';

export function ContactsIndicator({ user }:{user:User}) {
  const { user: currentUser } = useUser();
  const selfUser = user.id === currentUser?.id;
  return (
    <div className="flex flex-row w-full justify-center gap-2 max-w-md">
      {!!user.whatsappNumber && (
      <WhatsappButton whatsappNumber={user.whatsappNumber} />
      )}
      {!!user.instagramUsername && (
      <InstagramButton instagramUsername={user.instagramUsername} />
      )}
      {!hasContact(user) && (selfUser ? (
        <div>
          <Link href="/account/edit">
            <a className="link">
              Adicionar uma forma de contato para poder receber mensagens
            </a>
          </Link>
        </div>
      ) : (
        <div className="text-gray-500 text-sm">
          Sem meios de contato
        </div>
      ))}
    </div>
  );
}
