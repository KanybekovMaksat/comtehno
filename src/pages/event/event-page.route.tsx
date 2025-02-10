import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { EventPage } from "./event.ui";

export const EventPageRoute: RouteObject = {
  path: pathKeys.event.root(), 
  element: createElement(EventPage),
};
