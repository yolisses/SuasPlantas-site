import { Button } from '@mui/material';
import { IconType } from 'react-icons';
import { FaInstagram } from 'react-icons/fa';

interface ContactButtonProps{
    href:string
    gradient:string
    text:string
    Icon:IconType
}

export function ContactButton({
  href, gradient, text, Icon,
}:ContactButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="w-full max-w-sm"
    >
      <Button
        variant="contained"
        className="py-2 w-full flex flex-row gap-1"
        style={{
          background: gradient,
        }}
      >
        <Icon size={28} />
        {text}
      </Button>
    </a>
  );
}
