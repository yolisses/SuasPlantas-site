import { useSize } from '../common/SizeContext';

interface FooterProps{
    selected?:string
}

export function Footer({ selected }:FooterProps) {
  const { lg } = useSize();
  if (lg) return null;
  return (
    <div className="h-12 relative">
      <div
        style={{ boxShadow: '0 0 4px #0008' }}
        className="h-12 bg-white fixed w-full bottom-0 flex flex-row items-center justify-between p-2"
      >
        oi
      </div>
    </div>
  );
}
