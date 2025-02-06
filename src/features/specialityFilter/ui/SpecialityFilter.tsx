import {  Button, Stack, Typography, useMediaQuery } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';
import BrushIcon from '@mui/icons-material/Brush';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';

import React, { useState } from "react";
import { SpecialFilter } from "./SpecialFilter";
import { specialityQuery } from "~entities/speciality";
import { SpecialCard } from "./SpecialCard";

export interface SpecialityFilterItem {
  id: number;
  img?: JSX.Element;
  title: string;
  isActiveFilter: number | null;
  setIsActiveFilter: React.Dispatch<number>
}

export const SpecialityFilter: React.FC = () => {
  const {data: specialCardList, isLoading, isError} = specialityQuery.useGetSpeciality()  

  const specialityFilter: SpecialityFilterItem[] = [
    {title: "Все"},
    {img: <LanguageIcon />,title: "IT"},
    { img: <BrushIcon />, title: "Дизайн"},
    { img: <WorkOutlineOutlinedIcon />, title: "Управление и бизнес-аналитика"},
    { img: <WorkOutlineOutlinedIcon />, title: "Управление и бизнес-аналитика"},
    {img: <AssuredWorkloadOutlinedIcon />,title: "Финансы и банковское дело"},
  ];

  const [isActiveFilter, setIsActiveFilter] = useState<number | null>(null)

  // const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  if (isLoading) {
    return <Typography variant="h1">Loading...</Typography>
  }

  if (isError) {
    return <Typography variant="h1">Error 404</Typography>
  }

  return (
    <>
      <Stack className="mb-6 gap-2" flexWrap={"wrap"} direction={"row"} >
      {specialityFilter.map((specialFilter: SpecialityFilterItem, index: number) => (
        <SpecialFilter 
          isActiveFilter={isActiveFilter}
          setIsActiveFilter={setIsActiveFilter}
          img={specialFilter.img} 
          title={specialFilter.title} 
          id={index} 
          key={index} />
      ))}
      </Stack>
      <Stack className="flex-wrap gap-4 mb-6" direction={"row"}>
        {specialCardList?.data.map((specialCard) => (
          <SpecialCard {...specialCard} key={specialCard.id} />
        ))}
      </Stack>
      <div className="text-center">
        <Button className="hover:bg-black hover:text-white py-2.5 px-4 text-black border rounded-full border-solid border-[#E4E4E7]">Показать ещё</Button>
      </div>
    </>
  )
};