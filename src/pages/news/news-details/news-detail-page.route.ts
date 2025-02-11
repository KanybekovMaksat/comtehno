import { createElement } from 'react'
import { RouteObject } from 'react-router'
import { NewsDetailPage } from './news-detail-page.ui'

export const newsDetailsPageRoute: RouteObject = {
  path: 'news/:slug',
  element: createElement(NewsDetailPage),
}
