import { RouteObject } from "react-router-dom";
import { ReviewDetail } from "./reviewDetail-page-route";
import { pathKeys } from "~shared/lib/react-router";

export const reviewDetailRoute: RouteObject = {
  element: <ReviewDetail />,
  path: pathKeys.reviews.bySlug(":slug"),
};
