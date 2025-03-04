import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { DocumentDetailsPage } from './document-details.ui'

export const documentDetailsPageRoute: RouteObject = {
  path: 'document/:slug/',
  element: createElement(DocumentDetailsPage),
}
