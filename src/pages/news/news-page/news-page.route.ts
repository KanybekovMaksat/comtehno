import { createElement } from 'react'
import { RouteObject } from 'react-router'
import { NewsPage } from './news-page.ui'

export const newsPageRoute: RouteObject = {
  path: '/news',
  element: createElement(NewsPage),
}
