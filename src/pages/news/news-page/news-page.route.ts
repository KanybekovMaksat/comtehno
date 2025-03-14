import { createElement } from "react";
import { RouteObject } from "react-router";
import { NewsPage } from "./news-page.ui";
import { pathKeys } from "~shared/lib/react-router";

export const newsPageRoute: RouteObject = {
  path: pathKeys.news.root(),
  element: createElement(NewsPage),
};
