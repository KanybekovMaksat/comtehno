import { Container, Typography } from "@mui/material";
import { PartnersList } from "~features/partnersList";

export const Partners: React.FC = () => {
  return (
    <Container className="max-w-[1440px]">
      <Typography
        className="mb-4 text-center r-md:text-[28px] text-[44px] font-light"
        variant="h2"
      >
        Наши выпускники строят карьеру в ведущих компаниях
      </Typography>
      <PartnersList />
    </Container>
  );
};
