import { CircularProgress, Container, Typography } from "@mui/material";
import { SpecialHero } from "~widgets/specialHero";
import { TrainingProgram } from "~widgets/trainingProgram";
import { ProjectsGrid } from "~widgets/projectCards";
import { Resume } from "~widgets/resume/Resume-ui";
import { PriceTag } from "~widgets/priceTag/priceTag.ui";
import { useParams } from "react-router-dom";
import { specialityQuery } from "~entities/speciality";

export const SpecialityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: trainingProgramData,
    isError: trainingProgramDataError,
    isLoading: trainingProgramDataLoading,
  } = specialityQuery.useGetSpecialityDetail(slug);

  if (trainingProgramDataLoading || !trainingProgramData) {
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );
  }

  if (trainingProgramDataError) {
    return (
      <Typography className="text-center text-2xl" variant="h1">
        Ошибка при загрузке данных
      </Typography>
    );
  }

  const { data } = trainingProgramData;
  const { trainingProgram, studentProjects, cv } = data;

  return (
    <Container className="max-w-[1440px]">
      <SpecialHero {...data} />
      <TrainingProgram {...trainingProgram} />
      <ProjectsGrid studentProjects={studentProjects} />
      <Resume {...cv} />
      <PriceTag />
    </Container>
  );
};
