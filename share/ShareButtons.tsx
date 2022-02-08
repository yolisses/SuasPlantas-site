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
    socialIconProps:{
        size:number
        borderRadius:number
    }
}

export function ShareButtons({ shareUrl, socialIconProps }:ShareButtonsProps) {
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon {...socialIconProps} />
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon {...socialIconProps} />
      </WhatsappShareButton>
      <FacebookMessengerShareButton
        url={shareUrl}
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string}
      >
        <FacebookMessengerIcon {...socialIconProps} />
      </FacebookMessengerShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon {...socialIconProps} />
      </TelegramShareButton>
    </>
  );
}
