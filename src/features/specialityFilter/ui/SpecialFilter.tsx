import { Button, Typography } from "@mui/material";

export const SpecialFilter = (props) => {
  const {img, title, id, isActiveFilter, setIsActiveFilter} = props

  return <Button
    key={id} 
    onClick={() => setIsActiveFilter(id)} 
    sx={{
      backgroundColor: isActiveFilter === id ? "black" : "white", 
      color: isActiveFilter === id ? "white" : "black"
    }} 
    className="py-2.5 px-4 border-2 border-solid border-[#E4E4E7] rounded-2xl text-inherit gap-1">
    {img}
    <Typography
      variant="caption" 
      className="font-normal normal-case"
      sx={{
        color: isActiveFilter === id ? "white" : "black"
      }}>
        {title}
    </Typography>
  </Button>
};