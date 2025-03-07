import { RouteObject } from "react-router-dom";
import { SpecialityPage } from "./speciality-ui";
import { pathKeys } from "~shared/lib/react-router";

export const specialityPageRoute: RouteObject = {
  path: pathKeys.speciality.bySlug(":slug"),
  element: <SpecialityPage />,
};
