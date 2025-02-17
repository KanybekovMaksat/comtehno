import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { specialCardProps } from "~entities/speciality/speciality.types";
import { pathKeys } from "~shared/lib/react-router";

export const SpecialCard: React.FC = (props: specialCardProps) => {
  const { title, specialty, category, previewPhoto, slug } = props

  return <Link to={pathKeys.speciality.bySlug(slug)} className="shadow-[0px_0px_24px_0px_#E4E8F0] hover:scale-105 transition-all cursor-pointer p-4 r-sm:w-[400px] w-[450px] r-sm:h-32 h-64 rounded-2xl overflow-hidden">
    <Stack direction={"row"} spacing={1} className="mb-4 items-center">
      <img src={category?.photo} alt="" />
      <Typography className="text-[#0F766E] font-normal" variant="caption">{category?.name}</Typography>
    </Stack>
    <Box className="mb-20 relative">
      <Typography className="relative z-10 text-xl font-medium uppercase" variant="h3">{title}</Typography>
      <Typography className="relative z-10 text-tundora" variant="caption">{specialty}</Typography>
      <img className="absolute top-[-18px] right-[-20px]" src={previewPhoto && previewPhoto} alt="" />
    </Box>
    <div className="r-sm:hidden relative z-10 w-full text-center hover:bg-[#096059] py-3 bg-[#0D9488] text-white rounded-xl normal-case">Поступить</div>
  </Link>;
};