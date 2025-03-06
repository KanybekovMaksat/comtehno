import { useState } from "react";
import { reviewsQuery } from "~entities/reviews";

export const useReviewFilters = () => {
  const {
    data: reviewsData,
    isLoading,
    isError,
  } = reviewsQuery.useGetReviews();

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = reviewsData?.data.filter((student) => {
    const matchesFilter =
      activeFilter === "all" || student.category.name === activeFilter;
    const matchesSearch = student.category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return {
    setActiveFilter,
    activeFilter,
    setSearchQuery,
    searchQuery,
    filteredList,
    reviewsData,
    isLoading,
    isError,
  };
};
