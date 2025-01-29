import { Stack, Typography } from "@mui/material";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GoogleIcon from '@mui/icons-material/Google';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ExtensionIcon from '@mui/icons-material/Extension';

import { PartnersCard } from "~entities/partnersCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

export const PartnersList: React.FC = () => {
  type PartnerLogo = {
    icon: JSX.Element;
    nameLogo: string;
  };

  const parnerLogoList: PartnerLogo[] = [
    {
      icon: <WhatsAppIcon className="text-5xl text-green" />,
      nameLogo: "WhatsApp"
    },
    {
      icon: <TelegramIcon className="text-5xl text-blue" />,
      nameLogo: "Telegram"
    },
    {
      icon: <YouTubeIcon className="text-5xl text-red" />,
      nameLogo: "YouTube"
    },
    {
      icon: <AssuredWorkloadIcon className="text-5xl text-[#392fc1]" />,
      nameLogo: "Assured"
    },
    {
      icon: <GoogleIcon className="text-5xl text-blue" />,
      nameLogo: "Google"
    },
    {
      icon: <GTranslateIcon className="text-5xl" />,
      nameLogo: "GTranslate"
    },
    {
      icon: <ExtensionIcon className="text-5xl" />,
      nameLogo: "Extension"
    }
  ];

  return <>
    <Swiper
      slidesPerView={4}
      modules={[Autoplay]}
      spaceBetween={20}
      loop={true} 
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      speed={2000}
      className="w-[1440px] h-48 mb-[150px]"
    >
      {parnerLogoList.map((parnerLogo: PartnerLogo, index: number) => (
        <SwiperSlide key={index}>
          <PartnersCard {...parnerLogo} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>;
};