import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
} from 'react-share';

interface ShareButtonsProps{
    shareUrl:string
    reverse?:boolean
    socialIconProps:{
        size:number
        borderRadius:number
    }
}

export function ShareButtons({ shareUrl, reverse, socialIconProps }:ShareButtonsProps) {
  const buttons = [
    <WhatsappShareButton url={shareUrl}>
      <WhatsappIcon {...socialIconProps} />
    </WhatsappShareButton>,
    <FacebookShareButton url={shareUrl}>
      <FacebookIcon {...socialIconProps} />
    </FacebookShareButton>,
    <FacebookMessengerShareButton
      url={shareUrl}
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string}
    >
      <FacebookMessengerIcon {...socialIconProps} />
    </FacebookMessengerShareButton>,
    <TelegramShareButton url={shareUrl}>
      <TelegramIcon {...socialIconProps} />
    </TelegramShareButton>,
  ];

  if (reverse) return <>{buttons.reverse()}</>;
  return <>{buttons}</>;
}
