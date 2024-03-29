import {
  FaRegMap,
  FaRegUser,
  FaRegCommentAlt,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import Image from 'next/image';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { FAQ } from './FAQ';
import { emerald700 } from '../common/colors';
import { useSize } from '../common/SizeContext';
import { ContentFooter } from './ContentFooter';
import { RegisterButton } from './RegisterButton';
import { LocationExample } from './LocationExample';
import { MessagesExample } from './MessagesExample';
import { NotificationsExample } from './NotificationsExample';

interface SessionWithExampleProps{
  title:string
  Icon:IconType
  reverse?:boolean
  Example:ReactNode
  children:ReactNode
}

function H2({ children }:{children:ReactNode}) {
  return (
    <h2
      className="text-2xl lg:text-4xl center-row gap-2 bg-gradient-to-r bg-clip-text text-transparent from-emerald-700 to-lime-500 self-start"
    >
      {children}
    </h2>
  );
}

function SessionWithExample({
  title, Icon, children, Example, reverse,
}:SessionWithExampleProps) {
  return (
    <section className={`flex flex-col gap-2 lg:gap-6 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="flex-1 flex flex-col gap-2">
        <H2>
          <Icon size={28} color={emerald700} />
          {title}
        </H2>
        <p className="text-lg lg:text-xl">
          {children}
        </p>
      </div>
      <div className="flex-1">
        {Example}
      </div>
    </section>
  );
}

export function LandingPage() {
  const iconSize = 20;
  const endSize = 250;

  const { lg } = useSize();

  return (
    <div className="center-col relative">
      <header className="h-14 z-50 absolute w-full center-row p-2 bg-gradient-to-b from-[#000b] to-transparent text-white text-xl">
        <div className="center-row gap-1">
          <Image
            width={iconSize}
            height={iconSize}
            src="/icon/icon.svg"
            className="inline-flex"
          />
          <span>SuasPlantas</span>
        </div>
        <div className="ml-auto" />
        <RegisterButton alt />
      </header>
      <div className="relative center overflow-hidden">
        <div
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
          className="bg-green-600 bg-gradient-to-tr from-emerald-800 to-green-600"
        >
          <Image
            height={1200}
            objectFit="cover"
            width={lg ? 1800 : 1000}
            src="/landing/resource.svg"
            className="brightness-75 select-none pointer-events-none"
          />
        </div>
        <div className="absolute flex flex-col p-6 gap-4">
          <h1
            id="optimize-title"
            className="text-4xl text-white"
            style={{ textShadow: '0 0 1rem #000' }}
          >
            Encontre pessoas que adoram plantas
          </h1>
          <RegisterButton />
          <div className="text-white text-right">
            É grátis e sempre será
          </div>
        </div>
      </div>
      <div className="p-2 center-col gap-16 lg:gap-32 lg:max-w-4xl">
        <SessionWithExample
          title="Envie mensagens"
          Icon={FaRegCommentAlt}
          Example={<MessagesExample />}
        >
          Contamos com um sistema de mensagens integrado.
          Você pode enviar mensagens com a segurança de
          poder reportar qualquer inconveniente.
        </SessionWithExample>
        <SessionWithExample
          Icon={FaRegMap}
          title="Plantas perto de você"
          Example={<LocationExample />}
          reverse
        >
          Fica bem mais fácil de se conseguir mudinhas
          quando se mora perto. Por isso criamos um
          mapa super simples de usar.
        </SessionWithExample>
        <SessionWithExample
          Icon={FaRegUser}
          title="Faça parte da comunidade"
          Example={<NotificationsExample />}
        >
          O Suas Plantas é uma rede social completa,
          com comentários, curtidas e notificações.
          Tudo para ajudar todos que gostam de plantas.
        </SessionWithExample>
        <section className="flex flex-col">
          <H2>
            <FaRegQuestionCircle size={28} color={emerald700} />
            Perguntas frequentes
          </H2>
          <div className="flex flex-col gap-4 text-lg">
            <FAQ />
          </div>
        </section>
        <div className="lg:hidden sticky bottom-0 flex flex-col py-2 w-full">
          <RegisterButton />
        </div>
      </div>
      <div className="hidden lg:flex center-row gap-3 transform translate-y-2 mt-24">
        <Image src="/landing/pot3.png" width={endSize} height={endSize} objectFit="cover" />
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-3xl center-row gap-2 mb-2">
            Então, que tal?
          </h2>
          <RegisterButton />
        </div>
      </div>
      <ContentFooter />
    </div>
  );
}
