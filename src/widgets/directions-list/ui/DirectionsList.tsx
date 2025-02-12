import { Container } from "@mui/material";
import { DirectionCard } from "~entities/direction-card";
import { BooksIcon, CubeIcon, DStarIcon } from "~shared/assets/icons";

const directions = [
  {
    title: "КОЛЛЕДЖ",
    faculties: 123,
    programs: 123,
    icon: <BooksIcon />,
  },
  {
    title: "КУРСЫ",
    faculties: 223,
    programs: 124,
    icon: <DStarIcon />,
  },
  {
    title: "БАКАЛАВРИАТ",
    faculties: 12,
    programs: 125,
    icon: <CubeIcon />,
  },
];

export const DirectionsList = () => {
  return (
    <Container className="max-w-[1440px] r-sm:mb-20 mb-[150px]">
      <div className="flex items-center gap-6 r-md:flex-col r-md:gap-8 r-md:mb-4">
        {directions.map((direction) => (
          <DirectionCard key={direction.title} {...direction} />
        ))}
      </div>
    </Container>
  );
};