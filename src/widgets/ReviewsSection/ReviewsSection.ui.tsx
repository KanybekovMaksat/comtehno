import { Container, Typography } from "@mui/material";
import { ReviewCard } from "~entities/reviewCard/reviewCard";
import { reviews } from "~features/reviews/reviewsData";
import React, { useState } from "react";
import { ReviewSelector } from "~features/reviews/ReviewSelector";
import { ReviewFilters } from "~features/reviews/ReviewFilters";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from 'react-i18next';

export const ReviewsSection: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/reviews");
  };

  return (
    <Container className="bg-gray-100 max-w-[1440px] r-sm:mb-20 mb-[150px]">
      <div className="gap-4">
        <Typography variant="h4" className="text-center mb-6 font-bold w-full sm:w-[85vw]">
          <div className="text-[32px] sm:text-[44px] font-light">
            <span className="text-green-500">
              {t('reviews.over')} <span className="text-[#0F766E] font-bold">{t('reviews.studentsCount')}</span>
              {" "}
              {t('reviews.students')}
            </span>
            {" "}{t('reviews.and')}{" "}
            <span className="text-[#0F766E] font-bold">{t('reviews.graduatesCount')} </span>
            {t('reviews.graduates')}
          </div>
          <span className="text-[#52525B] text-center mb-6 text-[24px] sm:text-[36px] font-light">{t('reviews.shareFeedback')}</span>
        </Typography>
        <ReviewFilters />
        
        <ReviewSelector selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>
        <div className="flex flex-col items-center mb-6 justify-center gap-6">
          {selectedReview && <ReviewCard {...selectedReview} />}
        </div>
        <div className="flex items-center justify-between bg-[#F4F4F5] h-[72px] w-full sm:w-[85vw] px-4 rounded-2xl r-sm:flex-col r-sm:h-[120px] r-sm:justify-evenly">
          <Typography
            variant="subtitle2"
            sx={{ fontSize: { xs: "16px", sm: "19px" }, fontWeight: 400 }}
            gutterBottom>
            {t('reviews.viewMore')} {" "}
            <span className="text-[#0F766E]">{t('reviews.moreReviewsCount')}</span> {t('reviews.moreReviews')}
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0D9488", borderRadius: "12px" }}
            onClick={handleClick}>
            {t('reviews.goTo')} <NavigateNextIcon />
          </Button>
        </div>
      </div>
    </Container>
  );
};