import { createElement } from "react";
import { RouteObject } from "react-router";
import { pathKeys } from "~shared/lib/react-router";
import { ParlamentsPage } from "./parlaments-page.ui";

export const parlamentsPageRoute: RouteObject = {
  path: pathKeys.parlaments(),
  element: createElement(ParlamentsPage),
};
