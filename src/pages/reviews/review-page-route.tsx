import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { ReviewsPage } from "./review-page-ui";

export const reviewsPageRoute: RouteObject = {
  path: pathKeys.reviews.root(),
  element: <ReviewsPage />,
};
