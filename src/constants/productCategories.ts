export interface ProductCategories {
  id: number;
  name: string;
  category?: string;
  categories?: ProductCategories[];
}

export const productCategories: ProductCategories[] = [
  {
    id: 1,
    name: "Коляски",
    category: "childrenStrollers",
  },
  { id: 2, name: "Автокрісла", category: "carSeats" },
  { id: 3, name: "Транспорт", category: "childrenTransport" },
  {
    id: 4,
    name: "Манежі",
    category: "playgrounds",
  },
  {
    id: 5,
    name: "Стільці та ходунки",
    category: "chairsAndWalkers",
    categories: [
      { id: 1, name: "Качелі", category: "swing" },
      { id: 3, name: "Ходунки", category: "walkers" },
      { id: 4, name: "Стільці для годування", category: "chairs" },
    ],
  },
];

// categories: [
//   {
//     id: 1,
//     name: "Для новонароджених",
//     category: "strollersForNewborns",
//     categories: [
//       { id: 1, name: "2 в 1", category: "2in1" },
//       { id: 2, name: " 3 в 1", category: "3in1" },
//       { id: 3, name: "Для двійні", category: "forTwins" },
//       { id: 4, name: "Классичні", category: "classic" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Прогулянкові",
//     category: "strollers",
//     categories: [
//       { id: 1, name: "Коляски книжки", category: "bookStrollers" },
//       { id: 2, name: "Коляски тростини", category: "caneStrollers" },
//     ],
//   },
// ],
// name: "Дитяча кімната",
// category: "childrenRoom",
// categories: [
//   { id: 1, name: "Манежі", category: "playgrounds" },
//   { id: 2, name: "Ліжечка", category: "babyCots" },
//   {
//     id: 3,
//     name: "Матраци і наматрацники",
//     category: "mattresses",
//   },
//   { id: 4, name: "Постільна білизна", category: "linens" },
// ],
// { id: 2, name: "Заколисуючі центри", category: "lullingCenters" },
// { id: 6, name: "Все для годування", category: "everythingForFeeding" },
