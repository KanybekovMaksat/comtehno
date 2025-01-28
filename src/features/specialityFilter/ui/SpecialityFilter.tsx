import { Box, Button, Stack, Typography } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';
import BrushIcon from '@mui/icons-material/Brush';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import CodeIcon from '@mui/icons-material/Code';

import React, { useState } from "react";
import { SpecialCard } from "~entities/specialCard";

export const SpecialityFilter: React.FC = () => {
  const [isActiveFilter, setIsActiveFilter] = useState<number>(null)  

  const specialityFilter = [
    {
      title: "Все"
    },
    {
      img: <LanguageIcon />,
      title: "IT"
    },
    {
      img: <BrushIcon />,
      title: "Дизайн"
    },
    {
      img: <WorkOutlineOutlinedIcon />,
      title: "Управление и бизнес-аналитика"
    },
    {
      img: <WorkOutlineOutlinedIcon />,
      title: "Управление и бизнес-аналитика"
    },
    {
      img: <AssuredWorkloadOutlinedIcon />,
      title: "Финансы и банковское дело"
    },
  ]

  const specialCardList = [
    {
      icon: <CodeIcon className="text-[#0F766E]" />,
      title: "Программирование",
      name: "Frontend разработчик",
      description: "Техник-программист"
    },
    {
      icon: <CodeIcon className="text-[#0F766E]"  />,
      title: "Программирование",
      name: "Backend разработчик",
      description: "Техник-программист"
    },
    {
      icon: <BrushIcon className="text-[#0F766E]"  />,
      title: "Дизайн",
      name: "Графический дизайнер",
      description: "Дизайнер"
    },
    {
      icon: <BrushIcon className="text-[#0F766E]"  />,
      title: "Дизайн",
      name: "Интерьерный дизайнер",
      description: "Дизайнер"
    },
    {
      icon: <BrushIcon className="text-[#0F766E]"  />,
      title: "Дизайн",
      name: "Фэшн-дизайнер",
      description: "Дизайнер"
    },
    {
      icon: <WorkOutlineOutlinedIcon className="text-[#0F766E]"  />,
      title: "Управление проектами и продуктами",
      name: "Продукт менеджер",
      description: "Бизнес-администрирование"
    },
  ]

  return <Box>
    <Stack className="mb-6 flex-wrap gap-2" direction={"row"}>
      {specialityFilter.map((specialFilter, index) => (
        <Button 
        key={index} 
        onClick={() => setIsActiveFilter(index)} 
        sx={{
          backgroundColor: isActiveFilter === index ? "black" : "white", 
          color: isActiveFilter === index ? "white" : "black"
        }} 
        className="py-2.5 px-4 border-2 border-solid border-[#E4E4E7] rounded-2xl text-inherit gap-1">
          {specialFilter.img && specialFilter.img}
          <Typography 
            variant="caption" 
            className="font-medium normal-case"
            sx={{
              color: isActiveFilter === index ? "white" : "black"
            }}>
              {specialFilter.title}
          </Typography>
        </Button>
      ))}
    </Stack>
    <Stack className="flex-wrap gap-4 mb-6" direction={"row"}>
      {specialCardList.map((specialCard, index) => (
        <SpecialCard {...specialCard} key={index} />
      ))}
    </Stack>
    <div className="text-center">
      <Button className="hover:bg-black hover:text-white py-2.5 px-4 text-black border rounded-full border-solid border-[#E4E4E7]">Показать ещё</Button>
    </div>
  </Box>;
};