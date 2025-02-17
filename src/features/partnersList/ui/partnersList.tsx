import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GoogleIcon from '@mui/icons-material/Google';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ExtensionIcon from '@mui/icons-material/Extension';

import Marquee from 'react-fast-marquee';
import { PartnersCard } from './PartnersCard';

export interface PartnerCard {
  icon: JSX.Element;
  nameLogo: string;
};

export const PartnersList: React.FC = () => {
  const parnerLogoList: PartnerCard[] = [
    { icon: <WhatsAppIcon className="text-5xl text-green" />, nameLogo: "WhatsApp"},
    { icon: <TelegramIcon className="text-5xl text-blue" />, nameLogo: "Telegram"},
    { icon: <YouTubeIcon className="text-5xl text-red" />, nameLogo: "YouTube" },
    { icon: <AssuredWorkloadIcon className="text-5xl text-[#392fc1]" />, nameLogo: "Assured" },
    { icon: <GoogleIcon className="text-5xl text-blue" />, nameLogo: "Google" },
    { icon: <GTranslateIcon className="text-5xl" />, nameLogo: "GTranslate" },
    { icon: <ExtensionIcon className="text-5xl" />, nameLogo: "Extension" }
  ];

  return <Marquee
    direction="left"
    speed={100}
    gradient={true}
    className="r-sm:mb-20 mb-[150px] h-[200px] w-full">
      <div className='flex gap-6 mr-6'>
        {parnerLogoList.map((partnerCard: PartnerCard, index: number) => (
          <PartnersCard key={index} {...partnerCard} />
        ))}
      </div>
  </Marquee>
};