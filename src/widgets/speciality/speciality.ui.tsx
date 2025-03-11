import { Container, Stack, Typography } from "@mui/material";
import { SpecialityFilter } from "~features/specialityFilter";
import { useTranslation } from "react-i18next";

export const Speciality: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container
      id="speciality-section"
      className="max-w-[1440px] r-sm:mb-20 mb-[150px]"
    >
      <Stack direction={"column"} spacing={2}>
        <Typography
          variant="h2"
          className="r-sm:text-[32px] text-[44px] font-light"
        >
          {t("specialities.title")}
        </Typography>
        <SpecialityFilter />
      </Stack>
    </Container>
  );
};
