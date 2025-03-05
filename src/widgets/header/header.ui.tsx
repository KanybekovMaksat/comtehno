import { Container, useMediaQuery } from "@mui/material";
import { Navigate } from "~features/navigation";
import { Network } from "~features/networking";
import { useTheme } from "@mui/material/styles";

export const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className="max-w-[1440px] r-lg:mb-0 mt-20 r-md:mt-10 mb-6">
      {!isMobile && <Network />}
      <Navigate />
    </Container>
  );
};
