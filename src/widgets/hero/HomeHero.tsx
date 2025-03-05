import { Container, Typography } from "@mui/material";
import heroBg from "./img/hero-bg-comtehno.jpeg";
import { useTranslation } from "react-i18next";
import { HeroCarousel } from "~features/heroCarousel";
import SchoolIcon from "@mui/icons-material/School";

import dataImg from "./img/data-com.png";
import javaImg from "./img/java-com.png";
import pythonImg from "./img/python-com.png";

export const HomeHero = () => {
  const { t } = useTranslation(); // инициализируем перевод

  return (
    <section
      className="r-sm:mx-2 r-sm:h-[360px] mx-5 bg-cover rounded-3xl py-32 px-4 r-sm:mb-16 mb-[150px]"
      style={{
        backgroundImage: `url('${heroBg}')`,
      }}
    >
      <Container className="max-w-[1440px]">
        <div className="flex justify-between items-center">
          <div className="mb-10 r-md:max-w-2xl max-w-4xl">
            <div className="flex items-center">
              <span className="bg-sun text-white px-6 py-2 rounded-2xl mr-4">
                Среднее профессиональное образование
              </span>
              <div className="bg-primary cursor-pointer animate-bounce px-6 py-2 rounded-2xl text-white">
                <span className="mr-2">Поступить</span>
                <SchoolIcon />
              </div>
            </div>
            <Typography
              variant="h1"
              className="m-auto mt-4 mb-6 r-sm:text-2xl text-white font-geologica text-5xl font-[600]"
            >
              {t("homepage.title")}
            </Typography>
            <p className="text-2xl text-white w-[420px] mb-6">
              Среднее профессиональное образование по востребованным
              IT-профессиям
            </p>
            <div className="flex flex-wrap gap-3 max-w-5xl">
              <span className="border hover:bg-black bg-opacity-50 hover:text-white transition-all cursor-pointer px-4 py-2 rounded-full bg-white text-black">
                Ранний старт в IT
              </span>
              <span className="border hover:bg-white bg-opacity-50 hover:text-black transition-all cursor-pointer px-4 py-2 rounded-full bg-black text-white">
                Индивидуальный подход к ученикам
              </span>
              <span className="border hover:bg-black bg-opacity-50 hover:text-white transition-all cursor-pointer px-4 py-2 rounded-full bg-white text-black">
                Занятия ведут опытные педагоги
              </span>
              <span className="border bg-opacity-50 hover:bg-white hover:text-black transition-all cursor-pointer px-4 py-2 rounded-full bg-black text-white">
                В году проводим 3 раза
              </span>
            </div>
          </div>
          <div>
            <img className="max-w-96" src={pythonImg} alt="" />
          </div>
        </div>
        <HeroCarousel />
      </Container>
    </section>
  );
};
