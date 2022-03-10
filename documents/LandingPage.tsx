import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  FaRegCommentAlt, FaRegMap, FaRegQuestionCircle, FaRegUser,
} from 'react-icons/fa';
import { ShareButtons } from '../share/ShareButtons';
import { useSize } from '../size/SizeContext';
import { FAQ } from './FAQ';
import { LocationExample } from './LocationExample';
import { MessagesExample } from './MessagesExample';
import { NotificationsExample } from './NotificationsExample';

interface SessionWithExampleProps{
  title:string
  Icon:IconType
  children:ReactNode
  Example:ReactNode
  reverse?:boolean
}

function SessionWithExample({
  title, Icon, children, Example, reverse,
}:SessionWithExampleProps) {
  return (
    <div className={`flex flex-col gap-2 items-center lg:max-w-4xl ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="text-2xl lg:text-3xl flex flex-row items-center gap-2">
          <Icon size={25} />
          {title}
        </h2>
        <p className="text-lg lg:text-xl">
          {children}
        </p>
      </div>
      <div className="">
        {Example}
      </div>
    </div>
  );
}

export function LandingPage() {
  const iconSize = 20;
  const { lg } = useSize();

  return (
    <div>
      <div>
        <header className="h-14 z-50 w-full absolute flex flex-row items-center p-2 bg-gradient-to-b from-[#000b] to-transparent text-white text-xl">
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/landing/white.png"
              className="inline-flex"
              width={iconSize}
              height={iconSize}
            />
            <span>Suas Plantas</span>
          </div>
          <div className="ml-auto" />
          <button className="flex flex-row gap-2 items-center">
            <FaRegUser />
            <span>
              Entrar
            </span>
          </button>
        </header>
      </div>

      <div className="relative center overflow-hidden">
        <div style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <Image
            height={1200}
            objectFit="cover"
            width={lg ? 1800 : 1000}
            className="brightness-75"
            src="/landing/resource.svg"
          />
        </div>

        <div className="absolute flex flex-col p-6 gap-4">
          <h1
            className="text-4xl text-white"
            style={{ textShadow: '0 0 1rem #000' }}
          >
            Encontre pessoas que adoram plantas

          </h1>
          <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
            <FaRegUser />
            Entrar
          </button>
        </div>

      </div>

      <div className="p-2 flex flex-col items-center gap-16">
        <SessionWithExample
          title="Envie mensagens"
          Icon={FaRegCommentAlt}
          Example={<MessagesExample />}
        >
          Contamos com um sistema de mensagens integrado. Você pode enviar mensagens com a segurança de poder reportar qualquer inconveniente.
        </SessionWithExample>
        <SessionWithExample
          Icon={FaRegMap}
          title="Plantas perto de você"
          Example={<LocationExample />}
          reverse
        >
          Fica bem mais fácil de se conseguir mudinhas quando se mora perto. Por isso criamos um sistema de mapa super simples de usar.
        </SessionWithExample>
        <SessionWithExample
          Icon={FaRegUser}
          title="Faça parte da comunidade"
          Example={<NotificationsExample />}
        >
          O Suas Plantas é uma rede social completa, com comentários, curtidas e notificações. Tudo para ajudar todos que gostam de plantas.
        </SessionWithExample>
        <h2 className="text-2xl flex flex-row items-center gap-2">
          <FaRegQuestionCircle size={25} />
          Perguntas frequentes
        </h2>
        <div className="mb-2" />
        <FAQ />
        {' '}
        <div className="lg:hidden sticky bottom-0 flex flex-col p-2 w-full bg-white">
          <button className="main-button text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500">
            <FaRegUser />
            Entrar
          </button>
        </div>
      </div>

      <footer className="bg-slate-900 text-white flex flex-col gap-2 p-2">
        <div className="flex flex-col gap-1">
          <div className="text-green-200">Links</div>
          <Link href="/privacy-policy">Política de privacidade</Link>
          <Link href="/contact">Contato</Link>
          <div />
        </div>
        <div>
          <div className="text-green-200">
            Compartilhe essa ideia
          </div>
          <div className="flex flex-row gap-2 pt-1">
            <ShareButtons shareUrl="https://suasplantas.com" socialIconProps={{ size: 35, borderRadius: 1000 }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
