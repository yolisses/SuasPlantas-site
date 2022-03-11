import Image from 'next/image';
import { useRouter } from 'next/router';
import { interact } from '../interactions/interact';

export function PlayStoreButton({ imageResize }:{imageResize:number}) {
  const { basePath } = useRouter();
  function handleClick() {
    interact({ type: 'click play store button', basePath });
  }

  return (
    <a
      target="_blank"
      onClick={handleClick}
      rel="noopener noreferrer"
      href="https://play.google.com/store/apps/details?id=com.suasplantas&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <Image
        objectFit="contain"
        width={646 / imageResize}
        height={250 / imageResize}
        alt="Disponível no Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
      />
    </a>
  );
}
