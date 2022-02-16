import { FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { InstagramButton } from '../contact/InstagramButton';
import { FacebookButton } from '../contact/FacebookButton';

export function UserModal({ user }:{user:any}) {
  return (
    <div>
      <div className="text-xl">
        {user.name}
      </div>
      <div className="text-lg">
        {user.city}
        {' '}
        -
        {' '}
        {user.state}
      </div>
      <Image
        width={400}
        objectFit="cover"
        height={200}
        src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyA3kg7YWugGl1lTXmAmaBGPNhDW9pEh5bo&signature=GJnbP6sQrFY1ce8IsvG2WR2P0Jw="
        alt=""
      />
      <FacebookButton />
    </div>
  );
}
