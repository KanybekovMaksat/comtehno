import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { AboutPage} from './about-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export const aboutPageRoute: RouteObject = {
  path: pathKeys.about(),
  element: createElement(AboutPage),
};
