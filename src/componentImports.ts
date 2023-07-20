import loadable from "@loadable/component";
const HomePage = loadable(() => import("./pages/home/HomePage"));
const Layout = loadable(() => import("./layout/Layout"));
const CartPage = loadable(() => import("./pages/cart/CartPage"));
const ProductPage = loadable(() => import("./pages/productPage/ProductPage"));
const ErrorPage = loadable(() => import("./pages/error/ErrorPage"));
const CategoryPage = loadable(() => import("./pages/category/CategoryPage"));
const ContactPage = loadable(() => import("./pages/contact/ContactPage"));
const AboutPage = loadable(() => import("./pages/about/AboutPage"));
const InfoPage = loadable(() => import("./pages/info/InfoPage"));
const LoginPage = loadable(() => import("./pages/login/LoginPage"));
const SearchResultsPage = loadable(
  () => import("./pages/searchResults/SearchResultsPage")
);

export {
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
};
