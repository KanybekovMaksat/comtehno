import { Container, Typography } from "@mui/material";
import { StartupSlider } from "~features/startupSlider";

export const Startup: React.FC = () => {
  return <Container className="max-w-[1440px] mb-[200px]">
    <Typography variant="h2" className="mb-4 font-light text-[44px]">Проекты и стартапы наших студентов</Typography>
    <StartupSlider />
  </Container>
};