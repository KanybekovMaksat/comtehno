import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { specialCardProps } from "~entities/speciality/speciality.types";
import { pathKeys } from "~shared/lib/react-router";

export const SpecialCard: React.FC = (props: specialCardProps) => {
  const { title, specialty, category, previewPhoto, slug } = props

  return <Card className="hover:scale-105 hover:bg-[#f5f5f5] transition-all cursor-pointer p-4 w-[450px] max-h-64 rounded-2xl overflow-hidden">
    <Stack direction={"row"} spacing={1} className="mb-4 items-center">
      <img src={category.photo} alt="" />
      <Typography className="text-[#0F766E] font-normal" variant="caption">{category.name}</Typography>
    </Stack>
    <Box className="mb-20 relative">
      <Typography className="text-xl font-medium uppercase" variant="h3">{title}</Typography>
      <Typography variant="caption">{specialty}</Typography>
      <img className="absolute top-[-18px] right-[-20px]" src={previewPhoto} alt="" />
    </Box>
    <Link to={pathKeys.speciality.bySlug(slug)}>
      <div className="w-full text-center hover:bg-[#096059] py-3 bg-[#0D9488] text-white rounded-xl normal-case">Поступить</div>
    </Link>
  </Card>;
};