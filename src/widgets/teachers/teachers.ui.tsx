import { Container, Typography } from "@mui/material";
import { TeachersSlider } from "~features/teachersCard";

export const Teachers: React.FC = () => {
  return (
    <Container className="max-w-[1440px] mb-[150px]">
      <Typography className="r-lg:mb-2 mb-4 text-center r-sm:text-2xl r-lg:text-3xl text-4xl font-medium" variant="h2">
        Наши преподаватели
      </Typography>
      <p className="r-sm:mb-3 r-lg:mb-5 mb-10 text-[#52525B] text-center r-md:text-base r-lg:text-1xl text-2xl w-full">
        люди, которые вдохновляют учиться и развиваться
      </p>
      <TeachersSlider />
    </Container>
  );
};


