import { Typography } from "@mui/material";
// import { Filters } from "~shared/lib";
import { ReviewFilters } from "./reviewFilters";

export const Review: React.FC = () => {
  return (
    <div className="mx-6">
      <Typography
        className="font-light text-5xl r-md:text-4xl mb-6"
        variant="h2"
      >
        Отзывы студентов и выпускников
      </Typography>
      <ReviewFilters />
    </div>
  );
};
