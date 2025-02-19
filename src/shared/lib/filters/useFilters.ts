import { useState } from "react";
import data from "./filtersData.json";

export const useFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = data.data.filter((student) => {
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
