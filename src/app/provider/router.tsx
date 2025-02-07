import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';

import { aboutPageRoute } from '~pages/about';
import { errorPageRoute } from '~pages/error';
import { homePageRoute } from '~pages/home';
import { newsPageRoute } from '~pages/news';
import { GenericLayout } from '~app/layout';

import { reviewsPageRoute } from '~pages/reviewPage';
import { specialityPageRoute } from '~pages/speciality';

function BubbleError() {
  const error = useRouteError()
  if (error instanceof Error) {
    console.error('Route Error:', error.message)
  } else {
    console.error('Unknown Route Error:', error)
  }
  return (
    <div className="text-center text-red-500">
      <h1>Ошибка!</h1>
      <p>Что-то пошло не так. Пожалуйста, попробуйте позже.</p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <GenericLayout />,
    errorElement: <BubbleError />,
    children: [
      homePageRoute,
      aboutPageRoute,
      errorPageRoute,
      newsPageRoute,
      specialityPageRoute,
      reviewsPageRoute,
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
