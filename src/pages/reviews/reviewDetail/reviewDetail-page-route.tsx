import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { createElement } from "react";
import { ReviewDetailPage } from "./reviewDetail-page-ui";

export const reviewDetailPageRoute: RouteObject = {
  element: createElement(ReviewDetailPage),
  path: pathKeys.reviews.bySlug(":slug"),
};
