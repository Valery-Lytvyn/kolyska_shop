import "./categoryItem.scss";

interface CategoryItemProps {
  categoryName: string;
  category: string;
  mouseClickHandler: (category: string, e: React.SyntheticEvent) => void;
  setCoordinate: (x: number, y: number, z: number) => void;
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
