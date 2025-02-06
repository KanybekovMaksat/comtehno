import { RouteObject } from "react-router-dom";
import { SpecialityPage } from "./speciality-ui";

export const specialityPageRoute: RouteObject = {
  path: 'speciality/:slug',
  element: <SpecialityPage />
}