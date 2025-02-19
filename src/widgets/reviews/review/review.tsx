import { Typography } from "@mui/material";
import { Filters } from "~shared/lib";

export const Review: React.FC = () => {
  return (
    <>
      <Typography
        className="font-light text-5xl r-md:text-4xl mb-6"
        variant="h4"
      >
        Отзывы студентов и выпускников
      </Typography>
      <Filters />
    </>
  );
};
