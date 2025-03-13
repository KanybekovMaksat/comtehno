import { CalendarMonth } from "@mui/icons-material";
import { Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { TrainingProgramList } from "~features/trainingProgramAccordion";

interface courseListTypes {
  name: string;
  modules: {
    name: string;
  }[];
}

export interface TrainingProgramProps {
  portfolioProjects: string;
  trainingTime: string;
  courses: courseListTypes[];
}

export const TrainingProgram: React.FC<TrainingProgramProps> = ({
  portfolioProjects,
  trainingTime,
  courses,
}) => {
  return (
    <>
      <Typography
        variant="h2"
        className="mb-4 font-light r-md:text-[32px] text-[44px]"
      >
        Программа обучения
      </Typography>
      <div className="flex flex-wrap r-sm:gap-2 gap-6 mb-4 text-[#52525B]">
        <div className="flex items-center gap-2">
          <CalendarMonth />
          <Typography variant="caption" className="r-md:text-base text-xl">
            {portfolioProjects}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <WorkOutlineIcon />
          <Typography variant="caption" className="r-md:text-base text-xl">
            {trainingTime}
          </Typography>
        </div>
      </div>
      <TrainingProgramList courses={courses} />
    </>
  );
};
