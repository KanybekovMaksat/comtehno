import { createElement } from "react";
import { EventDetailsPage } from "./eventDetails.ui";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router"; 

export const EventDetailsPageRoute: RouteObject = {
  path: pathKeys.event.bySlug(":slug"), 
  element: createElement(EventDetailsPage),
};
