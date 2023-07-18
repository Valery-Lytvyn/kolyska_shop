export const ROUTES = {
  index: "/",
  about: "/about",
  contact: "/contact",
  info: "/info",
  search: (value: string | null): string => {
    return value ? `/search/${value}` : "/search/:value";
  },
  category: (categoryName: string | null) =>
    categoryName ? `/category/${categoryName}` : "/category/:categoryName",
  product: (productID: number | null) =>
    productID ? `/product/${productID}` : "/product/:productID",
  login: "/login",
  cart: "/cart",
};
