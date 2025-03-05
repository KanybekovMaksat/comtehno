import { createElement } from "react";
import { RouteObject } from "react-router";
import { ShedulePage } from "./schedule-page.ui";

export const shedulePageRoute: RouteObject = {
  path: "/shedule",
  element: createElement(ShedulePage),
};
