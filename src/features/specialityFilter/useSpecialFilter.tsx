import { useState } from "react";
import { specialityQuery } from "~entities/speciality";

import LanguageIcon from '@mui/icons-material/Language';
import BrushIcon from '@mui/icons-material/Brush';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';

export const useSpecialFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const {data: specialCardList, isLoading, isError} = specialityQuery.useGetSpeciality()  

  const filters = [
    {title: "Все", category: "all"},
    {icon: <LanguageIcon />, title: "IT", category: "Программирование и IT"},
    {icon: <BrushIcon />, title: "Дизайн", category: "Дизайн"},
    {icon: <WorkOutlineOutlinedIcon />, title: "Менеджмент", category: "Аналитика и управление продуктами"},
    // {title: "Финансы и банковское дело", category: "all"},
  ];

  const filteredList = specialCardList?.data.filter((event) => {    
    const matchesFilter =
      activeFilter === "all" || event.category.name === activeFilter;
    return matchesFilter
  });

  return {
    setActiveFilter,
    activeFilter,
    filteredList,
    isLoading,
    filters,
    isError
  };
};
