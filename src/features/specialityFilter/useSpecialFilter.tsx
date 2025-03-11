import { useState } from "react";
import { specialityQuery } from "~entities/speciality";

import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import BrushIcon from "@mui/icons-material/Brush";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

export const useSpecialFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const {
    data: specialCardList,
    isLoading,
    isError,
  } = specialityQuery.useGetSpeciality();

  const filters = [
    { title: "Все", category: "all" },
    {
      icon: <CodeOffOutlinedIcon />,
      title: "Программирование",
      category: "Программирование и IT",
    },
    { icon: <BrushIcon />, title: "Дизайн", category: "Дизайн" },
    {
      icon: <WorkOutlineOutlinedIcon />,
      title: "Менеджмент",
      category: "Аналитика и управление продуктами",
    },
    {
      icon: <AssignmentOutlinedIcon />,
      title: "Аналитика",
      category: "analityc",
    },
    // {title: "Финансы и банковское дело", category: "all"},
  ];

  const filteredList = specialCardList?.data.filter((event) => {
    const matchesFilter =
      activeFilter === "all" || event.category.name === activeFilter;
    return matchesFilter;
  });

  return {
    setActiveFilter,
    activeFilter,
    filteredList,
    isLoading,
    filters,
    isError,
  };
};
