import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../constants/allProductsData";
import { getFilteredProducts } from "../../redux/slices/productsSlice";
import PageTitle from "../../components/pageTitle/PageTitle";
import {
  ProductCategories,
  productCategories,
} from "../../constants/productCategories";
import ProductList from "../../components/productList/ProductList";
import Loader from "../../components/loader/Loader";
import "./categoryPage.scss";

function CategoryPage() {
  const productsData: Product[] = useSelector(getFilteredProducts);
  const { categoryName } = useParams();
  const [pageTitle, setPageTitle] = useState("");

  function findProductByName(categoryName: string): string | undefined {
    const category: ProductCategories | undefined = productCategories.find(
      (obj) => obj.category === categoryName
    );
    if (category) {
      return category.name;
    } else {
      const subCategory: ProductCategories | undefined = productCategories
        .flatMap((obj) => obj.categories || [])
        .find((obj) => obj.category === categoryName);
      if (subCategory) {
        return subCategory.name;
      }
    }
  }

  useEffect(() => {
    if (categoryName) {
      const title = findProductByName(categoryName);
      setPageTitle(title || "");
    }
  }, [categoryName]);

  return (
    <div className="category-page">
      <div className="container">
        {pageTitle && <PageTitle text={pageTitle} />}
        {productsData ? (
          <ProductList productsData={productsData} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
