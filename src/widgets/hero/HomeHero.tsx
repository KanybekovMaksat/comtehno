import { Container, Typography } from "@mui/material";
import heroBg from "./img/hero-bg-comtehno.jpeg";
import { useTranslation } from "react-i18next";
import { HeroCarousel } from "~features/heroCarousel";
import SchoolIcon from "@mui/icons-material/School";

import pythonImg from "./img/python-com.png";

export const HomeHero = () => {
  const { t } = useTranslation(); // инициализируем перевод
  const premList = [
    "Ранний старт в IT",
    "Диплом гос.образца",
    "Занятия ведут опытные педагоги",
  ];

  return (
    <section
      className="r-sm:mx-2 r-sm:h-[360px] mx-5 bg-cover rounded-3xl py-32 r-md:py-6 px-4 r-sm:mb-16 mb-[150px]"
      style={{
        backgroundImage: `url('${heroBg}')`,
      }}
    >
      <Container className="max-w-[1440px]">
        <div className="flex justify-between items-center r-lg:flex-col">
          <div className="mb-10 r-md:mb-2 r-md:max-w-2xl max-w-4xl">
            <div className="flex items-center">
              <span className="bg-sun r-md:truncate r-md:text-[12px] r-md:py-1 r-md:max-w-52 r-md:px-4 text-white px-6 py-2 rounded-2xl r-md:mr-2 mr-4">
                Среднее профессиональное образование
              </span>
            </div>
            <Typography
              variant="h1"
              className="mt-4 r-md:mt-2 r-md:w-72 r-md:mb-4 mb-6 r-sm:text-2xl text-white font-geologica text-5xl font-[600]"
            >
              {t("homepage.title")}
            </Typography>
            <p className="text-2xl r-sm:hidden text-white w-[420px] mb-6">
              Среднее профессиональное образование по востребованным
              IT-профессиям
            </p>
            <div className="flex r-md:mb-4 flex-wrap r-md:gap-2 gap-3 max-w-5xl r-md:overflow-x-auto">
              {premList.map((item, index) => (
                <span
                  key={index}
                  className="border r-md:text-[10px] hover:bg-white bg-opacity-50 hover:text-black transition-all cursor-pointer px-4 py-2 rounded-full bg-black text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <img className="r-lg:hidden max-w-96" src={pythonImg} alt="" />
          </div>
        </div>
        <HeroCarousel />
      </Container>
    </section>
  );
};
