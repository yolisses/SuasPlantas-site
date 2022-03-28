import Image from 'next/image';

interface ChipProps{
    text:string
    image?:string
}

export function Chip({ text, image }:ChipProps) {
  const imageSize = 32; // h-8, 2rem

  return (
    <button className={`hover:bg-gray-300 center-row h-8 gap-1 rounded-full max-w-[8rem] bg-gray-200 ${
      !image
        ? 'px-1'
        : 'pr-1'}`}
    >
      {image && (
      <div className="flex-shrink-0 center">
        <Image
          src={image}
          objectFit="cover"
          width={imageSize}
          height={imageSize}
          className="rounded-full"
        />
      </div>
      )}
      <span className=" overflow-hidden text-ellipsis whitespace-nowrap leading-none">
        {text}
      </span>
    </button>
  );
}
