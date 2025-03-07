import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { createElement } from "react";
import { ReviewsPage } from "./review-page-ui";

export const reviewsPageRoute: RouteObject = {
  path: pathKeys.reviews.root(),
  element: createElement(ReviewsPage),
};
