import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { MakalaBoxIcon } from '~shared/assets/icons';
import { StartupSlide } from './starupSlide';

export const StartupSlider: React.FC = () => {
  interface Startup {
    id: number,
    date: {
      icon: JSX.Element;
      title: string;
    };
    person: {
      icon: JSX.Element;
      title: string;
    };
    startupProject: {
      icon: JSX.Element;
      title: string;
      description: string;
      // buttons: {
      //   buttonViseble: {
      //     name: string;
      //     icon: JSX.Element;
      //   };
      //   buttonMoreDetails: {
      //     name: string;
      //     icon: JSX.Element;
      //   };
      // };
    };
  }

  const startupList: Startup[] = [
    {
      id: 1,
      date: {
        icon: <CalendarMonthOutlinedIcon />,
        title: "2 ноября 2024"
      },
      person: {
        icon: <PersonOutlineOutlinedIcon />,
        title: "Каныбеков Максат"
      },
      startupProject: {
        icon: <MakalaBoxIcon />,
        title: "Makala Box",
        description: 'Makalabox (Коробка Статей) — это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
        // buttons: {
        //   buttonViseble: {
        //     name: "Посетить сайт",
        //     icon: <ArrowOutwardOutlinedIcon />,
        //   },
        //   buttonMoreDetails: {
        //     name: "Подробнее",
        //     icon: <KeyboardArrowRightOutlinedIcon />
        //   }
        // }
      }
    },
    {
      id: 2,
      date: {
        icon: <CalendarMonthOutlinedIcon />,
        title: "2 ноября 2024"
      },
      person: {
        icon: <PersonOutlineOutlinedIcon />,
        title: "Сартов Ахмед"
      },
      startupProject: {
        icon: <MakalaBoxIcon />,
        title: "Up-web",
        description: 'Up-web (Коробка Статей) — это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
        buttons: {
          buttonViseble: {
            name: "Посетить сайт",
            icon: <ArrowOutwardOutlinedIcon />,
          },
          buttonMoreDetails: {
            name: "Подробнее",
            icon: <KeyboardArrowRightOutlinedIcon />
          }
        }
      }
    }
  ];

  return <Swiper
    modules={[Pagination, EffectFade, Autoplay]}
    pagination={{ clickable: true }}
    effect="fade"
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}>
    {startupList.map((startup: Startup) => (
      <SwiperSlide key={startup.id}>
        <StartupSlide {...startup} />
      </SwiperSlide>
    ))}
  </Swiper>
};