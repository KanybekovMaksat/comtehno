import { Typography } from "@mui/material";
import { ReviewPageFilters } from "~features/reviews/ReviewsPageFilters";
import { Search } from "~entities/studentSearch/studentSearch.ui";
import { Developers } from "~widgets/reviewComponent/Developers";

export const ReviewsPage = () => {
  return (
    <div className="px-[5vw] flex flex-col gap-4">
      <Typography variant="h4">Отзывы студентов и выпускников</Typography>
      <div className="flex r-md:flex-col items-center justify-between gap-3 w-full ">
        <ReviewPageFilters />
        <Search />
      </div>
      <Developers />
    </div>
  );
};
