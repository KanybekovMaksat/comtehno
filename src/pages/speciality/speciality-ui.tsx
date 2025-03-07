import { Container } from "@mui/material";
import { SpecialHero } from "~widgets/specialHero";
import { TrainingProgram } from "~widgets/trainingProgram";
import { ProjectsGrid } from "~widgets/projectCards";
import { Resume } from "~widgets/resume/Resume-ui";
import { PriceTag } from "~widgets/priceTag/priceTag.ui";

export const SpecialityPage: React.FC = () => {
  return (
    <Container className="max-w-[1440px]">
      <SpecialHero />
      {/* <TrainingProgram /> */}
      <ProjectsGrid />
      <Resume />
      <PriceTag />
    </Container>
  );
};
