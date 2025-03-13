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

  if (isError) return <Typography>Error 404!</Typography>;

  if (isLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  return (
    <Container className="max-w-[1440px]">
      <SpecialHero {...trainingProgramData.data} />
      <TrainingProgram {...trainingProgramData?.data?.trainingProgram} />
      <ProjectsGrid />
      <Resume {...trainingProgramData.data.cv} />
      <PriceTag />
    </Container>
  );
};
