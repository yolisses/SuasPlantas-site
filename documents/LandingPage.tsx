import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  FaRegCommentAlt, FaRegMap, FaRegQuestionCircle, FaRegUser,
} from 'react-icons/fa';
import { useIsLogged } from '../auth/useIsLogged';
import { ShareButtons } from '../share/ShareButtons';
import { useSize } from '../size/SizeContext';
import { FAQ } from './FAQ';
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

function useLoginButton() {
  const { isLogged } = useIsLogged();
  const { push } = useRouter();
  function handleClick() {
    const alreadyLogged = isLogged(() => {
      push('/');
    });
    if (alreadyLogged) push('/');
  }
  return { handleClick };
}

function LoginButton() {
  const { handleClick } = useLoginButton();
  return (
    <button
      onClick={handleClick}
      className="center-row gap-2 p-3 justify-center rounded-lg text-lg bg-gradient-to-r text-white from-green-500 to-emerald-500"
    >
      <FaRegUser />
      Entrar
    </button>
  );
}

function LoginButtonAlt() {
  const { handleClick } = useLoginButton();
  return (
    <button
      onClick={handleClick}
      className="flex flex-row gap-2 items-center scale-active"
    >
      <FaRegUser />
      <span>
        Entrar
      </span>
    </button>
  );
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
          <Icon size={28} color="#047857" />
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
  const storeImageResize = 4;

  const { lg } = useSize();

  return (
    <div className="center-col">
      <header className="h-14 z-50 w-full absolute center-row p-2 bg-gradient-to-b from-[#000b] to-transparent text-white text-xl">
        <div className="center-row gap-1">
          <Image
            src="/landing/white.png"
            className="inline-flex"
            width={iconSize}
            height={iconSize}
          />
          <span>Suas Plantas</span>
        </div>
        <div className="ml-auto" />
        <LoginButtonAlt />
      </header>
      <div className="relative center overflow-hidden">
        <div style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <Image
            height={1200}
            objectFit="cover"
            width={lg ? 1800 : 1000}
            className="brightness-75 bg-green-600 bg-gradient-to-tr from-emerald-600 to-green-600"
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
          <LoginButton />
        </div>
      </div>

      <div className="w-full p-2 center-col gap-16 lg:gap-32 lg:max-w-4xl">
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
        <section className="w-full flex flex-col">
          <H2>
            <FaRegQuestionCircle size={25} color="#047857" />
            Perguntas frequentes
          </H2>
          <div className="flex flex-col gap-4 text-lg">
            <FAQ />
          </div>
        </section>
        <div className="lg:hidden sticky bottom-0 flex flex-col py-2 w-full bg-white">
          <LoginButton />
        </div>
      </div>
      <div className="hidden lg:flex center-row gap-3 transform translate-y-3 mt-24">
        <Image src="/landing/pot3.png" width={endSize} height={endSize} objectFit="cover" />
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-3xl center-row gap-2 mb-2">
            Então, que tal?
          </h2>
          <LoginButton />
        </div>
      </div>
      <footer className="bg-slate-900 w-full text-white grid grid-cols-2 lg:flex flex-row justify-center gap-6 p-2 pt-4">
        <div className="flex flex-col gap-1">
          <div className="text-green-200">Links</div>
          <Link href="/contact">Contato</Link>
          <Link href="/about">Sobre nós</Link>
          <Link href="/privacy-policy">Política de privacidade</Link>
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
        <div>
          <div className="text-green-200">
            Feito com
            {' '}
            <span className="text-xs">💚</span>
          </div>
          <div>
            Suas Plantas
            {' '}
            <span className="text-xs">©</span>
            {' '}
            {(new Date()).getFullYear()}
          </div>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.suasplantas&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <Image
            width={646 / storeImageResize}
            height={250 / storeImageResize}
            objectFit="contain"
            alt="Disponível no Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
          />
        </a>
      </footer>
    </div>
  );
}
