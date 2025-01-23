import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { ErrorPage } from "./error-page-ui";

export const errorPageRoute: RouteObject = {
  path: pathKeys.error(),
  element: createElement(ErrorPage, { error: "Error 404!" }),
}