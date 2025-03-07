import { useState } from "react";
import { EventData } from "~entities/eventSwiperCard";

export const useEventFilter = () => {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "Все",
    "Frontend разработчик",
    "Backend разработчик",
    "Графический дизайнер",
    "Интерьерный дизайнер",
    "Фэшн-дизайн",
  ];

  const filteredEvents = EventData.filter((event) => {
    const matchesFilter =
      activeFilter === "Все" || event.category === activeFilter;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    filters,
    filteredEvents,
  };
};
