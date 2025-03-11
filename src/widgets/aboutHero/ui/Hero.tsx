import { Container, Typography } from "@mui/material";
import { AboutPageCards } from "./infoCards";
import { useTranslation } from "react-i18next";
import { HeroAbout } from "./HeroAbout";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5">
      <HeroAbout />
      <Container className="max-w-[1440px] mb-36">
        <div className="w-full r-sm:mb-20 mb-36 flex r-md:flex-col items-start justify-center r-sm:gap-2 gap-14 r-md:gap-6">
          <Typography
            variant="h3"
            className="r-sm:text-[40px] font-bold text-[#0F766E]"
          >
            {t("aboutPage.title")}
          </Typography>
          <Typography className="r-sm:text-[32px] text-gray-700 text-4xl font-light">
            {t("aboutPage.text")}
          </Typography>
        </div>
        <AboutPageCards />
      </Container>
    </div>
  );
};
