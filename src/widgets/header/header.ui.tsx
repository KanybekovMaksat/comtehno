import { Container } from "@mui/material";
import { Navigate } from "~features/navigation";
import { Network } from "~features/networking";

export const Header: React.FC = () => {
  return <Container className="max-w-[1440px]">
    <Network />
    <Navigate />
  </Container>;
};