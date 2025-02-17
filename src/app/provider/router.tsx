import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";

import { aboutPageRoute } from "~pages/about";
import { errorPageRoute } from "~pages/error";
import { homePageRoute } from "~pages/home";
import { newsDetailsPageRoute, newsPageRoute } from "~pages/news";
import { GenericLayout } from "~app/layout";
import { EventPageRoute } from "~pages/event";
import { EventDetailsPageRoute } from "~pages/EventDetailPage";
import { specialityPageRoute } from "~pages/speciality";
import { reviewsPageRoute } from "~pages/reviews";

function BubbleError() {
  const error = useRouteError();
  if (error instanceof Error) {
    console.error("Route Error:", error.message);
  } else {
    console.error("Unknown Route Error:", error);
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
    path: "/",
    element: <GenericLayout />,
    errorElement: <BubbleError />,
    children: [
      homePageRoute,
      aboutPageRoute,
      errorPageRoute,
      newsDetailsPageRoute,
      specialityPageRoute,
      EventPageRoute,
      EventDetailsPageRoute,
      reviewsPageRoute,
      newsPageRoute,
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
