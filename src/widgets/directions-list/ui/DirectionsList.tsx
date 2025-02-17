import { Container } from "@mui/material";
import { DirectionCard } from "~entities/direction-card";
import { BooksIcon, CubeIcon, DStarIcon } from "~shared/assets/icons";
import { useTranslation } from "react-i18next";

const directions = [
  {
    title: "college",
    faculties: 123,
    programs: 123,
    icon: <BooksIcon />,
  },
  {
    title: "courses",
    faculties: 223,
    programs: 124,
    icon: <DStarIcon />,
  },
  {
    title: "bachelor",
    faculties: 12,
    programs: 125,
    icon: <CubeIcon />,
  },
];

export const DirectionsList = () => {
  const { t } = useTranslation();

  const translatedDirections = directions.map((direction) => ({
    ...direction,
    title: t(`aboutPage.directions.${direction.title}`),
  }));

  return (
    <Container className="max-w-[1440px] r-sm:mb-20 mb-[150px]">
      <div className="flex items-center gap-6 r-md:flex-col r-md:gap-8 r-md:mb-4">
        {translatedDirections.map((direction) => (
          <DirectionCard key={direction.title} {...direction} />
        ))}
      </div>
    </Container>
  );
};