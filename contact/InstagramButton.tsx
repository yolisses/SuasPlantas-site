import { FaInstagram } from 'react-icons/fa';
import { ContactButton } from './ContactButton';
import { gradientByColors } from './gradientByColors';

const instagramColors = [
  // '#405DE6',
  '#5B51D8',
  '#833AB4',
  '#C13584',
  '#E1306C',
  // '#FD1D1D',
  // '#F56040',
  '#F77737',
  // '#FCAF45',
  '#FFDC80',
];

interface InstagramButtonProps{
    instagramUsername:string
}

export function InstagramButton({ instagramUsername }:InstagramButtonProps) {
  return (
    <ContactButton
      gradient={gradientByColors(instagramColors)}
      Icon={FaInstagram}
      text="Instagram"
      href={`https://instagram.com/${instagramUsername}`}
    />
  );
}
