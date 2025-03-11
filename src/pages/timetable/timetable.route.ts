import { createElement } from 'react'
import { RouteObject } from 'react-router'
import { TimetablePage } from './timetable.ui'

export const timetablePageRoute: RouteObject = {
  path: '/timetable',
  element: createElement(TimetablePage),
}
