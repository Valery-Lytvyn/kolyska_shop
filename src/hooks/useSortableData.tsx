import { useMemo, useState } from "react";
import { Product } from "../constants/allProductsData";
interface SortConfig {
  key: "name" | "price" | null;
  direction: "ascending" | "descending" | null;
}

export const useSortableData = (items: Product[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    if (sortConfig !== null && sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (
          a[sortConfig.key as "name" | "price"] !== undefined &&
          b[sortConfig.key as "name" | "price"] !== undefined
        ) {
          if (
            a[sortConfig.key as "name" | "price"] <
            b[sortConfig.key as "name" | "price"]
          ) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (
            a[sortConfig.key as "name" | "price"] >
            b[sortConfig.key as "name" | "price"]
          ) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: "name" | "price" | null) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};
