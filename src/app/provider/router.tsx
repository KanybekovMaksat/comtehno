import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";

import { aboutPageRoute } from "~pages/about";
import { errorPageRoute } from "~pages/error";
import { homePageRoute } from "~pages/home";
import { GenericLayout } from "~app/layout";
import { EventDetailsPageRoute, EventPageRoute } from "~pages/event";
import { specialityPageRoute } from "~pages/speciality";
import { documentDetailsPageRoute, documentsPageRoute } from "~pages/documents";
import { shedulePageRoute } from "~pages/schedule";
import { newsDetailsPageRoute, newsPageRoute } from "~pages/news";
import { reviewDetailPageRoute, reviewsPageRoute } from "~pages/reviews";
import { timetablePageRoute } from "~pages/timetable";
import { partnerPageRoute } from "~pages/partner";
import { parlamentsPageRoute } from "~pages/parliaments";

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
      specialityPageRoute,
      shedulePageRoute,
      // Events
      EventPageRoute,
      EventDetailsPageRoute,
      // Reviews
      reviewsPageRoute,
      reviewDetailPageRoute,
      // News
      newsPageRoute,
      newsDetailsPageRoute,
      // Document
      documentsPageRoute,
      documentDetailsPageRoute,
      // --------
      timetablePageRoute,
      partnerPageRoute,
      parlamentsPageRoute,
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
