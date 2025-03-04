import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { DocumentsPage } from './documents.ui'

export const documentsPageRoute: RouteObject = {
  path: 'documents/',
  element: createElement(DocumentsPage),
}
