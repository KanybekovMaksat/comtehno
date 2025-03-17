import { createElement } from 'react'
import { RouteObject } from 'react-router'
import { pathKeys } from '~shared/lib/react-router'
import { PartnerPage } from './partner-page.ui'

export const partnerPageRoute: RouteObject = {
  path: pathKeys.partner.root(),
  element: createElement(PartnerPage),
}
