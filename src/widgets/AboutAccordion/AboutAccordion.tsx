import { useState } from "react";
import {
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
// import img from "./img/comtehno.png";
import documentImg from "./img/document.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "aboutPage.mission",
    content: "aboutPage.missionContent",
  },
  {
    title: "aboutPage.values",
    content: "aboutPage.valuesContent",
  },
  {
    title: "aboutPage.vision",
    content: "aboutPage.visionContent",
  },
];

interface DocumentItem {
  title: string;
  link: string;
}
type documentListTypes = DocumentItem[];

export const AboutAccordion: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(0);
  const { t } = useTranslation();

  const documentList: documentListTypes = [
    {
      title: "Лицензия",
      link: "/file/licenthia_comtehno.pdf",
    },
    {
      title: "Устав",
      link: "/file/ustav_comtehno.pdf",
    },
    {
      title: "Диплом",
      link: "/file/diplom_comtehno.pdf",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className="r-sm:mb-20 mb-[150px] max-w-[1440px] r-md:mb-24">
      <Typography className="mb-4 text-[#18181B] font-light text-5xl r-sm:text-[32px]">
        {t("aboutPage.knowledgeToAction")}
      </Typography>
      <div className="flex items-center r-sm:mb-10 gap-10 r-lg:items-start r-lg:flex-col w-full">
        <div className="r-lg:mb-8 r-sm:mb-0 r-md:w-full">
          <Box className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div key={index}>
                <button
                  className={clsx(
                    "text-left font-light transition-colors w-full p-2 text-4xl r-sm:text-[32px]",
                    selected === index
                      ? "text-[#0F766E] border-l-4 border-l-[#0F766E]"
                      : "text-gray-500"
                  )}
                  onClick={() => setSelected(index === selected ? null : index)}
                >
                  {t(item.title)}
                </button>

                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden w-full ",
                    selected === index ? "h-36 opacity-100" : "h-0 opacity-0"
                  )}
                >
                  <div className="p-2  rounded-md shadow-sm scrollbar-thin">
                    <Typography className="text-[#18181B] text-2xl r-sm:text-[18px] font-light">
                      {t(item.content)}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </div>

        <div className="relative w-full max-w-2xl">
          {/* Левая кнопка */}
          <button className="absolute r-sm:left-20 r-md:left-40 r-md:top-48 top-56 bg-primary after:content-none p-7 left-60 -translate-y-1/2 z-10 swiper-button-prev text-white rounded-full hover:bg-opacity-60 transition">
            <ChevronLeft size={24} className="w-8 h-8 shrink-0" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={isMobile ? 1 : 2}
            centeredSlides={true}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // className="px-10"
          >
            {documentList.map((documentItem, index) => (
              <SwiperSlide
                key={index}
                className="flex border max-w-80 min-w-72 border-dove r-md:p-3 p-4 rounded-xl gap-5 items-center"
              >
                <img className="w-20" src={documentImg} alt="img" />
                <div className="flex flex-col mb-4">
                  <span className="text-2xl">{documentItem.title}</span>
                  <a
                    className="underline text-blue"
                    target="_blanck"
                    href={documentItem.link}
                  >
                    Нажмите, чтобы посмотреть документ.
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Правая кнопка */}
          <button className="absolute r-sm:right-20 r-md:top-48 r-md:right-40 bg-primary after:content-none p-7 right-60 top-56 -translate-y-1/2 z-10 swiper-button-next text-white rounded-full hover:bg-opacity-60 transition">
            <ChevronRight size={24} className="w-8 h-8 shrink-0" />
          </button>
        </div>
      </div>
    </Container>
  );
};
