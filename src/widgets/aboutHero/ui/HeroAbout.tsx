import pythonImg from "../img/hero-bg-comtehno.png";
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
      className="r-sm:mx-2 mx-5 bg-white rounded-3xl r-sm:mb-16 mb-[150px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(121.65deg, #4D5FF5 2.13%, #5649BF 36.86%, #38E569 96%)",
      }}
    >
      <div className="relative py-32 r-md:py-6 px-4">
        <Container className="relative z-[100px] max-w-[1440px]">
          <div className="flex justify-between items-center r-lg:flex-col">
            <div className="mb-10 z-[2] r-md:mb-2 r-md:max-w-2xl max-w-2xl">
              <Typography
                variant="h1"
                className="mt-4 r-md:mt-2 r-md:w-3xl r-md:mb-4 mb-6 leading-[70px] r-sm:text-3xl text-white font-geologica text-5xl font-[600]"
              >
                {t("aboutPage.hero")}
                <ExtensionIcon className="ml-3 text-5xl text-sun" />
              </Typography>
              <ul className="mb-14">
                <li className="text-2xl r-sm:hidden text-white w-[420px] mb-3">
                  Освой востребованные языки программирования и технологии.
                </li>
                <li className="text-2xl r-sm:hidden text-white w-[420px]">
                  Стань частью сообщества будущих IT-экспертов.
                </li>
              </ul>
              <div className="r-md:mb-4 r-md:gap-2 gap-3 max-w-5xl r-md:overflow-x-auto">
                <a
                  className="border text-[19px] r-sm:px-[70px] r-sm:py-3 r-md:text-[14px] hover:bg-white hover:text-black transition-all cursor-pointer px-[80px] py-4 rounded-full bg-sun text-white"
                  href="#speciality-section"
                  onClick={handleScroll}
                >
                  Начать обучение
                  <ExtensionIcon className="mr-5 ml-3 text-3xl text-white" />
                </a>
              </div>
            </div>
            <div>
              <img
                className="r-lg:hidden max-w-[900px] absolute right-[-160px] top-[-90px]"
                src={pythonImg}
                alt="img"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
