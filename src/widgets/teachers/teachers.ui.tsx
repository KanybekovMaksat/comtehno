import { Container, Typography } from "@mui/material";
import { TeachersSlider } from "~features/teachersCard";

export const Teachers: React.FC = () => {
  return (
    <Container className="max-w-[1440px]">
      <Typography className="max-md:mb-2 max-lg:mb-4 text-center max-sm:text-2xl max-md:text-3xl text-4xl font-medium" variant="h2">
        Наши преподаватели
      </Typography>
      <p className="sm:mb-3 md:mb-5 lg:mb-10 text-[#52525B] text-center md:text-1xl lg:text-2xl w-full">
        люди, которые вдохновляют учиться и развиваться
      </p>
      <TeachersSlider />
    </Container>
  );
};


