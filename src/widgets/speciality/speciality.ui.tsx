import { Box, Container, Stack, Typography } from "@mui/material";
import { SpecialityFilter } from "~features/specialityFilter";

export const Speciality: React.FC = () => {
  return <Container className="max-w-[1440px] mb-[150px]">
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h2" className="text-2xl sm:text-[44px] font-light">Специальности</Typography>
      <SpecialityFilter />
    </Stack>
  </Container>;
};