import Image from 'next/image';
import Link from 'next/link';
import { ShareButtons } from '../common/ShareButtons';

export function Footer() {
  const storeImageResize = 4;
  return (
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
        <div className="flex flex-row gap-1 pt-1">
          <ShareButtons shareUrl="https://suasplantas.com" socialIconProps={{ size: 35, borderRadius: 1000 }} />
        </div>
      </div>
      <div>
        <div className="text-green-200">
          {' '}
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
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=com.suasplantas&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <Image
          objectFit="contain"
          width={646 / storeImageResize}
          height={250 / storeImageResize}
          alt="Disponível no Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
        />
      </a>
    </footer>
  );
}
