import { Button, Typography } from "@mui/material";
import { useReviewFilters } from "./useReviewFilters";
import { Link } from "react-router-dom";
import { reviewsQuery } from "~entities/reviews";
import { formatDate } from "~shared/ui/date";

export const ReviewFilters: React.FC = () => {
  // const {
  //   setActiveFilter,
  //   activeFilter,
  //   setSearchQuery,
  //   searchQuery,
  //   filteredList,
  //   data,
  // } = useReviewFilters();

  const {
    data: reviewsData,
    isLoading,
    isError,
  } = reviewsQuery.useGetReviews();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {/* <div className="flex r-md:flex-wrap mb-6">
        <div className="flex flex-wrap r-md:flex-nowrap r-lg:overflow-x-auto r-md:h-14 gap-2 mb-2">
          {data.filter.map((filter, index) => (
            <Button
              key={index}
              onClick={() => setActiveFilter(filter.category)}
              className={`gap-2 border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-black font-normal text-base
              ${
                activeFilter === filter.category
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
              sx={{ whiteSpace: "nowrap", height: "36px", minWidth: "unset" }}
            >
              {filter.title}
            </Button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Поиск студента"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "342px",
            height: "40px",
            background: "#F4F4F5",
            border: "1px solid #D4D4D8",
            borderRadius: "12px",
            padding: "8px 16px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div> */}
      <div className="flex flex-wrap gap-6">
        {reviewsData.data.map((reviewsCard) => (
          <div key={reviewsCard.id}>
            <Link to={reviewsCard.slug}>
              <img
                className="rounded-lg mb-4 w-[440px] r-sm:h-[220px] h-[260px]"
                src={reviewsCard.studentPhoto}
                alt="img"
              />
            </Link>
            <div className="flex gap-2 text-[#52525B]">
              <span>{formatDate(reviewsCard.createdAt)}</span>
              <span>{reviewsCard.studentCategory}</span>
            </div>
            <Typography className="text-[22px]" variant="caption">
              {reviewsCard.studentFullName}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
