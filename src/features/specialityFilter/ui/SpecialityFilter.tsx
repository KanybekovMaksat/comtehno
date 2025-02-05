import {  Button, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';
import BrushIcon from '@mui/icons-material/Brush';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import CodeIcon from '@mui/icons-material/Code';

import React, { useState } from "react";
import { SpecialCard } from "~entities/specialCard";
import { DirectoryIcon, HomeIcon, PhythonIcon, PictureIcon, PlanetIcon, PlumpIcon } from "~shared/assets/icons";
import { SpecialFilter } from "./SpecialFilter";

export interface SpecialityFilterItem {
  img?: JSX.Element;
  title: string;
  isActiveFilter: number | null;
  setIsActiveFilter: React.Dispatch<number>

}

export interface SpecialCardItem {
  icon: JSX.Element;
  img: JSX.Element;
  title: string;
  name: string;
  description: string;
}

export const SpecialityFilter: React.FC = () => {
  const specialityFilter: SpecialityFilterItem[] = [
    {title: "Все"},
    {img: <LanguageIcon />,title: "IT"},
    { img: <BrushIcon />, title: "Дизайн"},
    { img: <WorkOutlineOutlinedIcon />, title: "Управление и бизнес-аналитика"},
    { img: <WorkOutlineOutlinedIcon />, title: "Управление и бизнес-аналитика"},
    {img: <AssuredWorkloadOutlinedIcon />,title: "Финансы и банковское дело"},
  ];

  const specialCardList: SpecialCardItem[] = [
    { icon: <CodeIcon className="text-[#0F766E]" />, img: <PlanetIcon />, title: "Программирование", name: "Frontend разработчик", description: "Техник-программист"},
    { icon: <CodeIcon className="text-[#0F766E]" />, img: <PhythonIcon />, title: "Программирование", name: "Backend разработчик", description: "Техник-программист"},
    { icon: <BrushIcon className="text-[#0F766E]" />, img: <PictureIcon />, title: "Дизайн", name: "Графический дизайнер", description: "Дизайнер"},
    { icon: <BrushIcon className="text-[#0F766E]" />, img: <HomeIcon />, title: "Дизайн", name: "Интерьерный дизайнер", description: "Дизайнер"},
    { icon: <BrushIcon className="text-[#0F766E]" />, img: <PlumpIcon />, title: "Дизайн", name: "Фэшн-дизайнер", description: "Дизайнер"},
    { icon: <WorkOutlineOutlinedIcon className="text-[#0F766E]" />, img: <DirectoryIcon />, title: "Управление проектами и продуктами", name: "Продукт менеджер", description: "Бизнес-администрирование"},
  ];

  const [isActiveFilter, setIsActiveFilter] = useState<number | null>(null)

  // const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Stack className="mb-6 gap-2" direction={"row"} >
      {specialityFilter.map((specialFilter: SpecialityFilterItem, index: number) => (
        <SpecialFilter 
          isActiveFilter={isActiveFilter}
          setIsActiveFilter={setIsActiveFilter}
          {...specialFilter} id={index} key={index} />
      ))}
      </Stack>
      <Stack className="flex-wrap gap-4 mb-6" direction={"row"}>
        {specialCardList.map((specialCard: SpecialCardItem, index: number) => (
          <SpecialCard {...specialCard} key={index} />
        ))}
      </Stack>
      <div className="text-center">
        <Button className="hover:bg-black hover:text-white py-2.5 px-4 text-black border rounded-full border-solid border-[#E4E4E7]">Показать ещё</Button>
      </div>
    </>
  )
};