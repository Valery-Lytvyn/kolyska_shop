import { AnimatePresence, motion } from "framer-motion";
import CategoryItem from "../categoryItem/CategoryItem";
import { getRndInteger } from "../../services/services";
import { ProductCategories } from "../../constants/productCategories";
import "./categoriesList.scss";

interface CategoriesListProps {
  array: ProductCategories[];
  mouseClickHandler: (category: string, e: React.SyntheticEvent) => void;
  className?: string;
  subcategory?: ProductCategories[];
  mouseLeaveHandler: () => void;
  setCoordinate: (x: number, y: number, z: number) => void;
  coordinate: number[];
}

function CategoriesList({
  array,
  mouseClickHandler,
  mouseLeaveHandler,
  className,
  subcategory,
  setCoordinate,
  coordinate,
}: CategoriesListProps) {
  return (
    <>
      <ul className={className}>
        {array.map(({ id, name, category }) => (
          <CategoryItem
            key={id}
            mouseClickHandler={mouseClickHandler}
            setCoordinate={setCoordinate}
            categoryName={name}
            category={category ? category : ""}
          />
        ))}
      </ul>
      <AnimatePresence>
        {subcategory && subcategory.length > 0 && (
          <motion.div
            style={{
              left: coordinate[0],
              top: coordinate[1],
            }}
            className="product-subcategory"
            onMouseLeave={mouseLeaveHandler}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CategoriesList
              array={subcategory}
              mouseClickHandler={mouseClickHandler}
              setCoordinate={setCoordinate}
              key={getRndInteger(100000)}
              coordinate={coordinate}
              mouseLeaveHandler={mouseLeaveHandler}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CategoriesList;
