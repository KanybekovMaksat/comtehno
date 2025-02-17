import { Typography } from "@mui/material";
import { Filters } from "~shared/lib";

export const Review: React.FC = () => {
  return (
    <>
      <Typography className="mb-6" variant="h4">
        Отзывы студентов и выпускников
      </Typography>
      <Filters />
    </>
  );
};
