import { CalendarMonth } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { TrainingProgram } from "~widgets/trainingProgram";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export const SpecialityPage: React.FC = () => {
  return <Container className="max-w-[1440px]">
    <TrainingProgram />
  </Container>;
};