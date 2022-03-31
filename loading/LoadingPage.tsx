import Image from 'next/image';

export function LoadingPage() {
  const imageSize = 80;

  return (
    <span className="center w-screen h-screen bg-white">
      <span className="flex select-none pointer-events-none loading mr-2">
        <Image
          priority
          width={imageSize}
          height={imageSize}
          src="/icon/icon margin 2.svg"
        />
      </span>
    </span>
  );
}
