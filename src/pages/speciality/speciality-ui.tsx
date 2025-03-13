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
    isError,
    isLoading,
  } = specialityQuery.useGetSpecialityDetail(slug);

  if (isError)
    return <Typography className="text-center">Error 404!</Typography>;

  if (isLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  const { data } = trainingProgramData || {};
  const { trainingProgram, studentProjects, cv } = data;

  if (!data || !trainingProgram)
    return <span className="text-center">Данных нет</span>; // Добавим защиту от undefined

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
