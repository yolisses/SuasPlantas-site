import Image from 'next/image';
import { FaRegCommentAlt, FaRegUser } from 'react-icons/fa';
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
        <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
          <FaRegUser />
          Entrar
        </button>
      </div>
      <div>
        <h2 className="text-xl flex flex-row items-center gap-2">
          <FaRegCommentAlt size={25} />
          <span>
            Envie mensagens
          </span>
        </h2>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam ut quos fuga velit qui laudantium atque sint corrupti illo neque dolores odio, fugiat fugit voluptatem eius mollitia id cumque!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam ut quos fuga velit qui laudantium atque sint corrupti illo neque dolores odio, fugiat fugit voluptatem eius mollitia id cumque!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam ut quos fuga velit qui laudantium atque sint corrupti illo neque dolores odio, fugiat fugit voluptatem eius mollitia id cumque!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam ut quos fuga velit qui laudantium atque sint corrupti illo neque dolores odio, fugiat fugit voluptatem eius mollitia id cumque!
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
        <div className="sticky bottom-0 flex flex-col p-2 w-full bg-white">
          <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
            <FaRegUser />
            Entrar
          </button>
        </div>
      </div>
      <div className="bg-slate-900 text-white">
        <div>Links</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia blanditiis vitae possimus ipsam enim? Distinctio, nesciunt porro magni neque repellat laboriosam tempora ipsum quasi dolorum, optio sapiente veniam, nisi quae!</div>
        <div />
      </div>
    </div>
  );
}
