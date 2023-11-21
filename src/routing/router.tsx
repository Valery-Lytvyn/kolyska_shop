import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";

import {
  HomePage,
  Layout,
  CartPage,
  ProductPage,
  ErrorPage,
  CategoryPage,
  ContactPage,
  AboutPage,
  InfoPage,
  LoginPage,
  SearchResultsPage,
} from "../componentImports";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
      {
        path: ROUTES.cart,
        element: <CartPage />,
      },

      {
        path: ROUTES.about,
        element: <AboutPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
      {
        path: ROUTES.info,
        element: <InfoPage />,
      },
      {
        path: ROUTES.category(null),
        element: <CategoryPage />,
      },
      {
        path: ROUTES.product(null),
        element: <ProductPage />,
      },
      {
        path: ROUTES.search(null),
        element: <SearchResultsPage />,
      },
    ],
  },
]);
