import { createElement } from 'react'
import { NewsPage } from './news-page.ui'
import { RouteObject } from 'react-router'

export const newsPageRoute: RouteObject = {
  path: 'news/:slug',
  element: createElement(NewsPage),
}
