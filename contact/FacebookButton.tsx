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
    facebookUsername:string
}

export function FacebookButton({ facebookUsername }:FacebookButtonProps) {
  return (
    <ContactButton
      gradient={gradientByColors(facebookColors, ['left', 'bottom'])}
      Icon={FaFacebook}
      text="Facebook"
      href={`https://facebook.com/${facebookUsername}`}
    />
  );
}
