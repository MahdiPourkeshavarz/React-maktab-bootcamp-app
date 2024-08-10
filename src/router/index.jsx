import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../index";
import { NotFoundPage } from "../pages/notFoundPage";
import { HomePage } from "../pages/homePage";
import { BootcampsLayout } from "../layout/BootcampsLayout";
import { BootcampsPage, loader as BootcampsLoader } from "../pages/BootcampsPage";
import { BootcampPage, loader as BootcampLoader } from "../pages/BootcampPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <BootcampsLayout />,
        children: [
          {
            index: true,
            element: <BootcampsPage />,
            loader: BootcampsLoader
          },
          {
            path: "/:productsId",
            element: <BootcampPage />,
            loader: BootcampLoader
          }
        ],
      },
    ],
  },
]);

export function AppRout() {
  return <RouterProvider router={router} />
}