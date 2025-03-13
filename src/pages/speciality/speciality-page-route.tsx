import { RouteObject } from "react-router-dom";
import { SpecialityPage } from "./speciality-ui";
import { pathKeys } from "~shared/lib/react-router";
import { createElement } from "react";

export const specialityPageRoute: RouteObject = {
  path: pathKeys.speciality.bySlug(":slug"),
  element: createElement(SpecialityPage),
};
