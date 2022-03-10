import Image from 'next/image';
import Link from 'next/link';
import { FaRegCommentAlt, FaRegMap, FaRegUser } from 'react-icons/fa';
import { ShareButtons } from '../share/ShareButtons';
import { LocationExample } from './LocationExample';
import { MessagesExample } from './MessagesExample';

export function LandingPage() {
  return (
    <div>
      <div>
        <header className="h-12 z-50 w-full fixed flex flex-row items-center p-2 bg-gradient-to-b from-[#000b] to-transparent text-white">
          <div className="text-white text-lg">Suas Plantas</div>
          <div className="ml-auto" />
          <button className="flex flex-row gap-2 items-center">
            <FaRegUser />
            <span>
              Entrar
            </span>
          </button>
        </header>
      </div>
      <Image
        src="/landing/hero1.jpg"
        height={900}
        width={2000}
        objectFit="cover"
      />
      <div className="p-2 flex flex-col gap-3 p-2">
        <h1 className="text-2xl">Encontre pessoas que gostam de plantas</h1>
        <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
          <FaRegUser />
          Entrar
        </button>
      </div>
      <div className="p-2 flex flex-col items-center">
        <h2 className="text-2xl flex flex-row items-center gap-2">
          <FaRegCommentAlt size={25} />
          Envie mensagens
        </h2>
        <div>
          Contamos com um sistema de mensagens integrado. Você pode enviar mensagens com a segurança de poder reportar qualquer inconveniente.
        </div>
        <MessagesExample />
        <h2 className="text-2xl flex flex-row items-center gap-2">
          <FaRegMap size={25} />
          Plantas perto de você
        </h2>
        <div>
          Fica bem mais fácil de se conseguir mudinhas quando se mora perto. Por isso criamos um sistema de mapa super simples de usar
        </div>
        <LocationExample />
      </div>
      <div className="sticky bottom-0 flex flex-col p-2 w-full bg-white">
        <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
          <FaRegUser />
          Entrar
        </button>
      </div>
      <footer className="bg-slate-900 text-white flex flex-col gap-2 p-2">
        <div>
          <div className="text-green-200">Links</div>
          <Link href="/privacy-policy">
            Política de privacidade
          </Link>
          <div />
        </div>
        <div>
          <div>Compartilhe essa ideia</div>
          <div className="flex flex-row gap-2">
            <ShareButtons socialIconProps={{ size: 35, borderRadius: 1000 }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
