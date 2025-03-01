import { Container, Typography } from "@mui/material";
import { StartupSlider } from "~features/startupSlider";
import { useTranslation } from "react-i18next";

export const Startup: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="max-w-[1440px] r-md:hidden mb-[200px]">
      <Typography
        variant="h2"
        className="r-sm:text-[32px] mb-4 font-light text-[44px]"
      >
        {t("startup.title")}
      </Typography>
      <StartupSlider />
    </Container>
  );
};
