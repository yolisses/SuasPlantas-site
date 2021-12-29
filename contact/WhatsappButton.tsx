import { FaWhatsapp } from 'react-icons/fa';
import { ContactButton } from './ContactButton';
import { gradientByColors } from './gradientByColors';

const whatsappColors = [
  // '#00E065',
  '#00D15e',
  '#00a74b',
  '#00a43c',
];
interface WhatsappButtonProps{
    whatsappNumber:string|number
}

export function WhatsappButton({ whatsappNumber }:WhatsappButtonProps) {
  return (
    <ContactButton
      gradient={gradientByColors(whatsappColors)}
      Icon={FaWhatsapp}
      text="Whatsapp"
      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
    />
  );
}
