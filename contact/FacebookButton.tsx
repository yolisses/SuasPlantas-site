import { FaFacebook } from 'react-icons/fa';
import { ContactButton } from './ContactButton';
import { gradientByColors } from './gradientByColors';

const facebookColors = [
  '#009aff',
  '#1877f2',
  '#1877f2',
  // '#262ee5',

];

interface FacebookButtonProps{
    facebookId:string
}

export function FacebookButton({ facebookId }:FacebookButtonProps) {
  return (
    <ContactButton
      gradient={gradientByColors(facebookColors, ['left', 'bottom'])}
      Icon={FaFacebook}
      text="Facebook"
      href={`https://facebook.com/groups/221704719133593/user/${facebookId}`}
    />
  );
}
