import { CalendarMonth } from "@mui/icons-material";
import { CircularProgress, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { TrainingProgramList } from "~features/trainingProgramAccordion";
import { specialityQuery } from "~entities/speciality";
import { useParams } from "react-router-dom";

export const TrainingProgram: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: trainingProgramData,
    isError,
    isLoading,
  } = specialityQuery.useGetSpecialityDetail(slug);

  if (isError) return <Typography>Error 404!</Typography>;

  if (isLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  const { portfolioProjects, trainingTime } =
    trainingProgramData?.data?.trainingProgram;

  const data = trainingProgramData?.data?.trainingProgram;

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
      <TrainingProgramList {...data} />
    </>
  );
};
