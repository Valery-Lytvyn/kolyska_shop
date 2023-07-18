import { useSortableData } from "../../hooks/useSortableData";
import { Product } from "../../constants/allProductsData";
import SingleProduct from "../singleProduct/SingleProduct";
import SortButton from "../sortButton/SortButton";
import "./productList.scss";

interface ProductListProps {
  productsData: Product[];
}

function ProductList({ productsData }: ProductListProps) {
  const { items, requestSort } = useSortableData(productsData);

  return (
    <>
      <SortButton requestSort={requestSort} />
      <div className="product-list">
        {items?.map((item: Product) => (
          <SingleProduct key={`${item.barcode}${item.name}`} itemData={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
