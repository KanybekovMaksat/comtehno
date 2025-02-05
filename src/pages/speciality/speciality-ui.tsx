import { Container } from "@mui/material";
import { SpecialHero } from "~widgets/specialHero";
import { TrainingProgram } from "~widgets/trainingProgram";

export const SpecialityPage: React.FC = () => {
  return <Container className="max-w-[1440px]">
    <SpecialHero />
    <TrainingProgram />
  </Container>;
};