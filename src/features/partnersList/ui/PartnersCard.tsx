import { Card, Typography } from "@mui/material";
import { PartnerCard } from "./partnersList";

export const PartnersCard: React.FC = ({ icon, nameLogo }: PartnerCard) => {
  return <Card className="hover:bg-[#e5e5e5] cursor-pointer py-16 px-20 bg-[#FAFAFA] rounded-2xl gap-2 flex items-center w-[342px]"> {icon}
    <Typography className="font-medium text-2xl" variant="caption">{nameLogo}</Typography>
  </Card>;
};