import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GoogleIcon from '@mui/icons-material/Google';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ExtensionIcon from '@mui/icons-material/Extension';

import { PartnersCard } from "~entities/partnersCard";
import Marquee from 'react-fast-marquee';

export const PartnersList: React.FC = () => {
  type PartnerLogo = {
    id: number;
    icon: JSX.Element;
    nameLogo: string;
  };

  const parnerLogoList: PartnerLogo[] = [
    {
      id: 1,
      icon: <WhatsAppIcon className="text-5xl text-green" />,
      nameLogo: "WhatsApp"
    },
    {
      id: 2,
      icon: <TelegramIcon className="text-5xl text-blue" />,
      nameLogo: "Telegram"
    },
    {
      id: 3,
      icon: <YouTubeIcon className="text-5xl text-red" />,
      nameLogo: "YouTube"
    },
    {
      id: 4,
      icon: <AssuredWorkloadIcon className="text-5xl text-[#392fc1]" />,
      nameLogo: "Assured"
    },
    {
      id: 5,
      icon: <GoogleIcon className="text-5xl text-blue" />,
      nameLogo: "Google"
    },
    {
      id: 6,
      icon: <GTranslateIcon className="text-5xl" />,
      nameLogo: "GTranslate"
    },
    {
      id: 7,
      icon: <ExtensionIcon className="text-5xl" />,
      nameLogo: "Extension"
    }
  ];

  return <Marquee
    direction="left"
    speed={100}
    gradient={true}
    className="mb-[150px] h-[200px] w-full">
      <div className='flex gap-6 mr-6'>
        {parnerLogoList.map((parnerLogo: PartnerLogo, index: number) => (
          <PartnersCard {...parnerLogo} key={index} />
        ))}
      </div>
  </Marquee>
};