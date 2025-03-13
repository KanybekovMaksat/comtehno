import pythonImg from "../img/hero_about.png";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExtensionIcon from "@mui/icons-material/Extension";

export const HeroAbout = () => {
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("speciality-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-white rounded-3xl r-sm:mb-10 mb-[150px] overflow-hidden"
      style={{
        background:
          "linear-gradient(121.65deg, #4D5FF5 2.13%, #5649BF 36.86%, #38E569 96%)",
      }}
    >
      <Container className="max-w-[1440px] py-10 px-6 r-lg:p-10">
        <div className="flex justify-between items-center">
          <div className="r-lg:w-xs max-w-2xl">
            <Typography
              variant="h1"
              className="r-md:mb-3 mb-4 leading-[70px] text-white font-geologica r-lg:text-3xl text-5xl font-[600]"
            >
              {t("aboutPage.hero")}
              <ExtensionIcon className="ml-3 text-5xl text-sun" />
            </Typography>
            <ul className="mb-14 text-white r-sm:hidden text-2xl r-lg:text-xl w-[420px]">
              <li className="mb-3">
                Освой востребованные языки программирования и технологии.
              </li>
              <li>Стань частью сообщества будущих IT-экспертов.</li>
            </ul>
            <div className="r-md:gap-2 gap-3 max-w-5xl r-md:overflow-x-auto">
              <a
                className="border text-[19px] r-sm:px-[70px] r-sm:py-3 r-md:text-[14px] hover:bg-white hover:text-black transition-all cursor-pointer px-[80px] py-4 rounded-full bg-sun text-white"
                href="#speciality-section"
                onClick={handleScroll}
              >
                Начать обучение
                <ExtensionIcon className="ml-3 text-3xl text-white" />
              </a>
            </div>
          </div>
          <img
            className="max-w-[600px] r-lg:hidden"
            src={pythonImg}
            alt="img"
          />
        </div>
      </Container>
    </section>
  );
};
