import { Navigate } from "~features/navigation";
import { Network } from "~features/networking";

export const Header: React.FC = () => {
  return <>
    <Network />
    <Navigate />
  </>;
};