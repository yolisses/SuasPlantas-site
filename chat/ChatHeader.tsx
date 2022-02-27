import Image from 'next/image';
import { mockContacts } from './mockContacts';

export function ChatHeader() {
  const imageSize = 40;
  const contact = mockContacts[0];
  return (
    <div className="flex flex-row p-2 gap-2 shadow-md items-center">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={contact.image}
        width={imageSize}
        height={imageSize}
      />
      <div>
        {contact.name}
      </div>
    </div>
  );
}
