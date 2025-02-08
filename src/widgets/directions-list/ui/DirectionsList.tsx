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
    <div className="px-[65px] r-md:px-0 flex items-center max-w-[1440px] container gap-6 r-md:flex-col r-md:gap-8 mb-[150px] r-md:mb-4">
      {directions.map((direction) => (
        <DirectionCard key={direction.title} {...direction} />
      ))}
    </div>
  );
};