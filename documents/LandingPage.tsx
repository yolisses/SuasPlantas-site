import Image from 'next/image';
import { ShareButtons } from '../share/ShareButtons';

export function LandingPage() {
  return (
    <div>
      <div>
        <header className="h-12 z-50 w-full fixed flex flex-row items-center p-2 bg-gradient-to-b from-[#000b] to-transparent">
          <div className="text-white text-lg">Suas Plantas</div>
        </header>
      </div>
      <Image
        src="/landing/hero1.jpg"
        height={900}
        width={2000}
        objectFit="cover"
      />
      <div className="p-2 flex flex-col gap-3">
        <h1 className="text-2xl">Encontre pessoas que gostam de plantas</h1>
        <button className="main-button py-3 px-6 text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
          Entrar
        </button>
      </div>
      <div>
        <div>Compartilhe essa ideia</div>
        <div className="flex flex-row gap-2">
          <ShareButtons socialIconProps={{
            size: 40,
            borderRadius: 1000,
          }}
          />
        </div>
      </div>
    </div>
  );
}
