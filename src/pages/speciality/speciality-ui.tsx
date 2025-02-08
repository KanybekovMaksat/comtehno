import { Container } from "@mui/material";
import { SpecialHero } from "~widgets/specialHero";
import { TrainingProgram } from "~widgets/trainingProgram";
import { ProjectsGrid } from "~widgets/projectCards";
import { Resume } from "~widgets/resume/Resume-ui";
import { PriceTag } from "~widgets/priceTag/priceTag.ui";
import { CourseInfo } from "~widgets/CourseInfo";

export const SpecialityPage: React.FC = () => {
  return <Container className="max-w-[1440px] container">
    <SpecialHero />
    <TrainingProgram />
    <ProjectsGrid/>
    <Resume/>
    <CourseInfo />
    <PriceTag/>
  </Container>;
};