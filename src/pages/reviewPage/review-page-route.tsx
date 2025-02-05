import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { ReviewsPage } from "./reviewPage-ui";

export const reviewsPageRoute: RouteObject = {
  path: pathKeys.reviews(),
  element: <ReviewsPage />
}