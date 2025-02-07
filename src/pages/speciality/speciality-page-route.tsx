import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { SpecialityPage } from "./speciality-ui";

export const specialityPageRoute: RouteObject = {
  path: pathKeys.speciality(),
  element: <SpecialityPage />
}