import Image from 'next/image';
import style from './LoadingPage.module.css';

export function LoadingPage() {
  const imageSize = 80;

  return (
    <div className="center w-screen h-screen">
      <div className={`flex select-none pointer-events-none ${
        style.spinner
      }`}
      >
        <Image
          priority
          width={imageSize}
          height={imageSize}
          src="/icon/icon margin 2.svg"
        />
      </div>
    </div>
  );
}
