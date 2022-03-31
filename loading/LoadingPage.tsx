import Image from 'next/image';
import style from './LoadingPage.module.css';

export function LoadingPage() {
  const imageSize = 80;

  return (
    <div className="center w-screen h-screen">
      <div className={`flex ${style.spinner}`}>
        <Image src="/icon/icon margin 2.svg" width={imageSize} height={imageSize} />
      </div>
    </div>
  );
}
