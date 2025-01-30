import { Typography } from "@mui/material";
import { ReviewCard } from "~entities/reviewCard/reviewCard";
import { reviews } from "~features/reviews/reviewsData";
import React, { useState } from "react";
import { ReviewSelector } from "~features/reviews/ReviewSelector";
import { ReviewFilters } from "~features/reviews/ReviewFilters";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const ReviewsSection: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/review");
  };

  return (
    <section className="py-8 bg-gray-100 flex justify-center ">
      <div className="container flex flex-col items-center max-w-[1440px] min-w-[1200px] gap-4">
        <Typography variant="h4" className="text-center mb-6 font-bold w-[85vw]">
          <div className="text-[44px] font-light">
            <span className="text-green-500">
              Свыше <span className="text-[#0F766E] font-bold">1700</span>{" "}
              студентов
            </span>{" "}
            и{" "}
            <span className="text-[#0F766E] font-bold">50 000 выпускников</span>
          </div>
          <div>
            <span className="text-[#52525B] text-center mb-6 text-[36px] font-light">
              поделимся их отзывами
            </span>
          </div>
        </Typography>

        <ReviewFilters />

        <ReviewSelector
          selectedReview={selectedReview}
          setSelectedReview={setSelectedReview}
        />

        <div className="flex flex-col items-center justify-center gap-6">
          {selectedReview && <ReviewCard {...selectedReview} />}
        </div>

        <div className="flex items-center justify-between bg-[#F4F4F5] h-[72px] w-[85vw] px-4 rounded-2xl">
          <Typography variant="subtitle2" sx={{fontSize:'19px', fontWeight:400}} gutterBottom>
            Смотреть продолжение и другие{" "}
            <span className="text-[#0F766E]">256</span> отзывов
          </Typography>
          <Button variant="contained" sx={{backgroundColor:'#0D9488', borderRadius:'12px'}} onClick={handleClick}>
            Перейти <NavigateNextIcon/>
          </Button>
        </div>
      </div>
    </section>
  );
};
