import { createElement } from "react";
import { RouteObject } from "react-router";
import { NewsDetailPage } from "./news-detail-page.ui";
import { pathKeys } from "~shared/lib/react-router";

export const newsDetailsPageRoute: RouteObject = {
  path: pathKeys.news.bySlug(":slug"),
  element: createElement(NewsDetailPage),
};
