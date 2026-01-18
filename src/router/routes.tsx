import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/app/layout";
import HomePage from "@/app/page";
import NotFoundPage from "@/app/not-found/page";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/ui-effect-demo",
  },
);
