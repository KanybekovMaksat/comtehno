import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { reviews } from "./reviewsData";

interface ReviewSelectorProps {
  selectedReview: any;
  setSelectedReview: (review: any) => void;
}

export const ReviewSelector: React.FC<ReviewSelectorProps> = ({
  setSelectedReview,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tabs
      value={selectedIndex}
      onChange={(_, newIndex) => {
        setSelectedIndex(newIndex);
        setSelectedReview(reviews[newIndex]);
      }}
      variant="scrollable"
      scrollButtons="auto"
      className="container mb-6 border-b border-gray-300 w-[85vw]"
    >
      {reviews.map((review, index) => (
        <Tab
          key={index}
          label={
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-[17px] text-xl font-normal">{review.name}</span>
            </div>
          }
          className="min-w-max"
          sx={{
            textTransform: "none",
            marginRight: 5,
          }}
        />
      ))}
    </Tabs>
  );
};
