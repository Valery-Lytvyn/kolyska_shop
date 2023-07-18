import alians from "../assets/images/about_shop/alians.webp";
import belveder from "../assets/images/about_shop/belveder.webp";

export const CATEGORY_ID = {
  carSeats: 11053,
  walkers: 11054,
  strollers: 11082 || 42772,
  playgrounds: 11050,
  swing: 11052 || 50591,
  chairs: 11051,
  childrenTransport: 14183 || 67665 || 11037,
};

export const shopAddresses = [
  {
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.844980229117!2d24.70699577565619!3d48.92470576865736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c17019a9a84d%3A0x9c1b553566717d2a!2z0JzQsNCz0LDQt9C40L0g0LTQuNGC0Y_Rh9C40YUg0YLQvtCy0LDRgNGW0LIgItCa0L7Qu9C40YHQutCwIg!5e0!3m2!1suk!2sua!4v1689402768118!5m2!1suk!2sua",
    market: "тц Альянс",
    address: "вул. Любомира Гузара 24a",
    mark: "2ий поверх",
    backPicture: alians,
  },
  {
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.68415615156533!2d24.705336615861782!3d48.92544958687183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c113d2397d3b%3A0x8f073310b015d2bb!2z0JrQvtC70LjRgdC60LAgKNC00LjRgtGP0YfRliDQutC-0LvRj9GB0LrQuCAp!5e0!3m2!1suk!2sua!4v1689403324118!5m2!1suk!2sua",
    market: "тц Бельведер",
    address: ". вул.Павла Тичини 7",
    mark: "2ий поверх",
    backPicture: belveder,
  },
];

interface SortButtonItem {
  sortTitle: string;
  sortConfig: "name" | "price";
}
export const sortButtonData: SortButtonItem[] = [
  { sortTitle: "1 2 3", sortConfig: "price" },
  { sortTitle: "Я...А", sortConfig: "name" },
  { sortTitle: "А...Я", sortConfig: "name" },
  { sortTitle: "3 2 1", sortConfig: "price" },
];
