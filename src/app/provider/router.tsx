import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import { GenericLayout } from '../../pages/layout';
import { dashboardPageRoute } from '../../pages/dashboard';
import { aboutPageRoute } from '~pages/about';
import { errorPageRoute } from '~pages/error';

function BubbleError() {
  const error = useRouteError();
  if (error instanceof Error) {
    console.error('Route Error:', error.message);
  } else {
    console.error('Unknown Route Error:', error);
  }
  return (
    <div className="text-center text-red-500">
      <h1>Ошибка!</h1>
      <p>Что-то пошло не так. Пожалуйста, попробуйте позже.</p>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <GenericLayout />,
    errorElement: <BubbleError />,
    children: [
      dashboardPageRoute,
      aboutPageRoute,
      errorPageRoute
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
