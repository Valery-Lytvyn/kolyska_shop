import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchedProducts } from "../../redux/slices/productsSlice";
import ProductList from "../../components/productList/ProductList";
import Loader from "../../components/loader/Loader";
import { Product } from "../../constants/allProductsData";
import PageSubtitle from "../../components/pageSubtitle/PageSubtitle";
import "./searchResultsPage.scss";

function SearchResultsPage() {
  const { value } = useParams();
  const foundProducts: Product[] = useSelector(getSearchedProducts);

  return (
    <div className="search-results-page">
      <div className="container">
        {!foundProducts && <Loader />}

        {foundProducts.length > 0 ? (
          <>
            <PageSubtitle text={`Результати пошуку за запитом "${value}":`} />
            <ProductList productsData={foundProducts} />
          </>
        ) : (
          <PageSubtitle text={`Нажаль товар "${value}" не знайдений.`} />
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
