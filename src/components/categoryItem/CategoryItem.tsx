import { useState } from "react";
import "./categoryItem.scss";

interface CategoryItemProps {
  categoryName: string;
  category: string;
  mouseClickHandler: (arg0: string, e: React.SyntheticEvent) => void;
  setCoordinate: (arg0: number, arg1: number, arg2: number) => void;
}

function CategoryItem({
  categoryName,
  category,
  mouseClickHandler,
  setCoordinate,
}: CategoryItemProps) {
  return (
    <div
      className="category-item"
      onClick={(e) => {
        mouseClickHandler(category, e);
        setCoordinate(
          e.currentTarget.offsetLeft,
          e.currentTarget.offsetTop,
          e.currentTarget.offsetHeight
        );
      }}
    >
      {categoryName}
    </div>
  );
}

export default CategoryItem;
