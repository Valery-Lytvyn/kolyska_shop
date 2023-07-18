import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import loadable from "@loadable/component";
const HomePage = loadable(() => import("../pages/home/HomePage"));
const Layout = loadable(() => import("../layout/Layout"));
const CartPage = loadable(() => import("../pages/cart/CartPage"));
const ProductPage = loadable(() => import("../pages/productPage/ProductPage"));
const ErrorPage = loadable(() => import("../pages/error/ErrorPage"));
const CategoryPage = loadable(() => import("../pages/category/CategoryPage"));
const ContactPage = loadable(() => import("../pages/contact/ContactPage"));
const AboutPage = loadable(() => import("../pages/about/AboutPage"));
const InfoPage = loadable(() => import("../pages/info/InfoPage"));
const LoginPage = loadable(() => import("../pages/login/LoginPage"));
const SearchResultsPage = loadable(
  () => import("../pages/searchResults/SearchResultsPage")
);

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
