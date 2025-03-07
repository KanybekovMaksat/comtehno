import { useState } from "react";
import { newsQueries } from "~entities/news";

export const useNewsFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = newsQueries.useGetNews();

  const filteredList = newsData?.data.filter((student) => {
    const matchesFilter =
      activeFilter === "all" || student?.category.name === activeFilter;
    const matchesSearch = student?.title
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
    newsLoading,
    newsError,
  };
};
