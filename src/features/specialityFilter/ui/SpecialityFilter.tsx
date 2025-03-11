import { Button, CircularProgress, Stack, Typography } from "@mui/material";

import React from "react";
import { SpecialCard } from "./SpecialCard";
import { useSpecialFilter } from "../useSpecialFilter";
import { specialCardProps } from "~entities/speciality/speciality.types";

export const SpecialityFilter: React.FC = () => {
  const {
    setActiveFilter,
    activeFilter,
    filteredList,
    isLoading,
    filters,
    isError,
  } = useSpecialFilter();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant="h1">Error 404</Typography>;
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter, index) => (
          <Button
            key={index}
            onClick={() => setActiveFilter(filter.category)}
            className={`gap-2 border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-[#18181B] font-normal text-base
            ${
              activeFilter === filter.category
                ? "bg-[#18181B] text-white"
                : "hover:bg-[#18181B] hover:text-white"
            }`}
            sx={{ whiteSpace: "nowrap", height: "36px", minWidth: "unset" }}
          >
            {filter.icon}
            {filter.title}
          </Button>
        ))}
      </div>
      <Stack className="flex-wrap gap-3 mb-6" direction={"row"}>
        {filteredList.map((specialCard: specialCardProps) => (
          <SpecialCard {...specialCard} key={specialCard.id} />
        ))}
      </Stack>
      <div className="text-center">
        <Button className="hover:bg-black hover:text-white py-2.5 px-4 text-black border rounded-full border-solid border-[#E4E4E7]">
          Показать ещё
        </Button>
      </div>
    </>
  );
};
