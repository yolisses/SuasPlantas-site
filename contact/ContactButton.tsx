import { IconType } from 'react-icons';

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
      tabIndex={-1}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="w-full max-w-sm"
    >
      <button
        className="hover:brightness-95 shadow-md rounded-lg text-white py-2 w-full flex flex-row gap-1 active:transform active:scale-[0.98] duration-75 transition-transform"
        style={{
          background: gradient,
        }}
      >
        <Icon size={28} />
        {text}
      </button>
    </a>
  );
}
