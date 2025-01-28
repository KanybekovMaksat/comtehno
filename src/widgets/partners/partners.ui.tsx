import { Container, Typography } from "@mui/material";
import { PartnersList } from "~features/partnersList";

export const Partners: React.FC = () => {
  return <Container className="max-w-[1440px]">
    <Typography
      className="mb-4 text-center text-4xl font-medium" 
      variant="h2">
        Наши выпускники строят карьеру в ведущих компаниях
    </Typography>
    <PartnersList />
  </Container>;
};