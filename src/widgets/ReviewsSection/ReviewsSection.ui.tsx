import { Typography } from "@mui/material";
import { ReviewFilters } from "~features/reviews/ReviewFilters";
import { ReviewCard } from "~entities/reviewCard/reviewCard";
import { reviews } from "~features/reviews/reviewsData";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100 flex justify-center">
      <div className="container flex flex-col items-center max-w-[1440px] min-w-[1200px]">
        <Typography variant="h4" className="text-center mb-6 font-bold">
          <div className="text-[44px]">
            Свыше <span className="text-green-500">1700 студентов</span> и{" "}
            <span className="text-green-500">50 000 выпускников</span>
          </div>
          <div>
            <span className="text-[#52525B] text-center mb-6 font-bold text-[36px]">
              поделимся их отзывами
            </span>
          </div>
        </Typography>

        <ReviewFilters />

        <div className="w-screen mb- flex flex-col items-center justify-center gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="px-4 ">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
