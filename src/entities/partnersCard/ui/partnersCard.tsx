import { Card, Typography } from "@mui/material";

interface PartnersCardProps {
  icon: React.JSX;
  nameLogo: string;
  key?: React.Key;
}

export const PartnersCard: React.FC<PartnersCardProps> = ({ icon, key, nameLogo }) => {
  return <Card className="hover:bg-[#e5e5e5] cursor-pointer py-16 px-20 bg-[#FAFAFA] rounded-2xl gap-2 flex items-center w-[342px]" key={key}> {icon}
    <Typography className="font-medium text-2xl" variant="caption">{nameLogo}</Typography>
  </Card>;
};