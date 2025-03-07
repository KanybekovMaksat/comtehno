import { createElement } from "react";
import { RouteObject } from "react-router";
import { ShedulePage } from "./schedule-page.ui";
import { pathKeys } from "~shared/lib/react-router";

export const shedulePageRoute: RouteObject = {
  path: pathKeys.timetable(),
  element: createElement(ShedulePage),
};
