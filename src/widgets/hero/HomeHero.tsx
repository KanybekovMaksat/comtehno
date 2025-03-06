import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HeroCarousel } from "~features/heroCarousel";

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
      className="r-sm:mx-2 r-sm:h-[360px] mx-5 bg-white rounded-3xl r-sm:mb-16 mb-[150px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(121.65deg, #4D5FF5 2.13%, #5649BF 36.86%, #38E569 96%)",
      }}
    >
      {/* Фоновое изображение */}
      {/* <div
        className="absolute inset-0 w-[900px] h-[900px] z-[]"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div> */}

      <div className="relative py-20 r-md:py-6 px-4">
        {/* Фоновые оттенки */}
        <div
          className="absolute w-[981px] h-[981px] rounded-full blur-[150px] z-[-300]"
          style={{
            top: "10%",
            left: "-33%",
            backgroundColor: "rgb(68, 208, 164)",
          }}
        ></div>
        <div
          className="absolute w-[981px] h-[981px] rounded-full blur-[250px] z-[-300]"
          style={{
            top: "-20%",
            right: "-50%",
            backgroundColor: "rgb(50, 195, 149)",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute w-[981px] h-[981px] rounded-full blur-[150px] z-[-300]"
          style={{
            bottom: "-95%",
            right: "-25%",
            backgroundColor: "rgb(44, 215, 161)",
          }}
        ></div>

        <Container className="z-[100px] max-w-[1440px]">
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
      </div>
    </section>
  );
};
