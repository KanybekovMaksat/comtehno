import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '~shared/lib/react-router'
import { EventDetailsPage } from './event-details-page.ui'

export const EventDetailsPageRoute: RouteObject = {
  path: pathKeys.event.bySlug(':slug'),
  element: createElement(EventDetailsPage),
}
