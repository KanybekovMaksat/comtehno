import { Container } from "@mui/material";
import { DirectionCard } from "~entities/direction-card";
import { BooksIcon, CubeIcon, DStarIcon } from "~shared/assets/icons";
import { useTranslation } from "react-i18next";
import { pathKeys } from "~shared/lib/react-router";

export const DirectionsList: React.FC = () => {
  const { t } = useTranslation();

  const directions = [
    {
      title: "about",
      department: 2,
      speciality: 10,
      icon: <BooksIcon />,
      link: pathKeys.reviews.root(),
    },
    {
      title: "courses",
      department: 2,
      direction: 10,
      icon: <DStarIcon />,
    },
    {
      title: "bachelor",
      institutions: 8,
      direction: 34,
      icon: <CubeIcon />,
      link: "https://muit.makalabox.com/institutes",
    },
  ];

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
