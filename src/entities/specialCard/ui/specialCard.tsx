import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { SpecialCardItem } from "~features/specialityFilter/ui/SpecialityFilter";

// interface SpecialCardProps {
//   icon: React.ReactNode;
//   title?: string;
//   img: React.ReactNode;
//   name: string;
//   description: string;
// }

export const SpecialCard: React.FC = (props: SpecialCardItem) => {
  const { icon, title, img, name, description } = props

  return <Card className="hover:scale-105 hover:bg-[#f5f5f5] transition-all cursor-pointer p-4 w-[450px] max-h-64 rounded-2xl overflow-hidden">
    <Stack direction={"row"} spacing={1} className="mb-4 items-center">
      {icon}
      <Typography className="text-[#0F766E] font-normal" variant="caption">{title}</Typography>
    </Stack>
    <Box className="mb-20 relative">
      <Typography className="text-xl font-medium uppercase" variant="h3">{name}</Typography>
      <Typography variant="caption">{description}</Typography>
      <div className="absolute top-[-18px] right-[-20px]">
        {img}
      </div>
    </Box>
    <Button className="w-full hover:bg-[#096059] py-3 bg-[#0D9488] text-white rounded-xl normal-case">Поступить</Button>
  </Card>;
};