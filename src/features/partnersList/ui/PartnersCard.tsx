import { Card, Typography } from "@mui/material";
import { PartnerCard } from "./partnersList";

export const PartnersCard: React.FC = ({ icon, nameLogo }: PartnerCard) => {
  return (
    <Card className="hover:bg-[#e5e5e5] cursor-pointer r-md:px-4 r-md:py-4 py-16 px-20 bg-[#FAFAFA] r-md:rounded-lg rounded-2xl gap-2 flex items-center r-md:w-44 w-[342px]">
      {icon}
      <Typography
        className="font-medium r-md:text-lg text-2xl"
        variant="caption"
      >
        {nameLogo}
      </Typography>
    </Card>
  );
};
