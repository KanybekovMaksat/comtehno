import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { DashboardPage } from './dashboard-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export const dashboardPageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(DashboardPage),
};
