import { Button, Typography } from "@mui/material";
import { SpecialityFilterItem } from "./SpecialityFilter";

export const SpecialFilter: React.FC = ({img, title, id, isActiveFilter, setIsActiveFilter}: SpecialityFilterItem) => {
  return <Button onClick={() => setIsActiveFilter(id)} sx={{backgroundColor: isActiveFilter === id ? "black" : "white", color: isActiveFilter === id ? "white" : "black"}} className="py-2.5 px-4 border-2 border-solid border-[#E4E4E7] rounded-2xl text-inherit gap-1">
    {img}
    <Typography variant="caption" className="font-normal normal-case" sx={{color: isActiveFilter === id ? "white" : "black" }}>{title}</Typography>
  </Button>
};