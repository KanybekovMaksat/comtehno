import { useState } from "react";
// import { reviewsQuery } from "~entities/reviews";

export const useReviewFilters = () => {
  // const {
  //   data: reviewsData,
  //   isLoading,
  //   isError,
  // } = reviewsQuery.useGetReviews();

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = data.filter((student) => {
    const matchesFilter =
      activeFilter === "all" || student.category === activeFilter;
    const matchesSearch = student.title
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
    data,
  };
};
