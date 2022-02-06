import Image from 'next/image';

export function DangerousPage() {
  const link = 'https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/273187378_2228070550664074_3629909993100171371_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qXxvh-o8054AX-u9sO8&_nc_ht=scontent-for1-1.xx&oh=00_AT9sZC5aKxWJQMQDVUfSO9s4XKP5TLkcXi5hU52Oc5i2lQ&oe=620459FC';

  const size = 800;
  return (
    <div>
      teste
      <Image src={link} width={size} height={size} />
    </div>
  );
}
