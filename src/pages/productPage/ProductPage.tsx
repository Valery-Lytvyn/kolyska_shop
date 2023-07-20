import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import LazyImage from "../../components/lazyImage/LazyImage";
import Counter from "../../components/counter/Counter";
import { ThemeContext } from "../../layout/Layout";
import TextButton from "../../components/textButton/TextButton";
import {
  getCurrentProduct,
  removeCurrentProduct,
} from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { Product } from "../../constants/allProductsData";
import "./productPage.scss";
import { currencyConversion, notification } from "../../services/services";
import PageTitle from "../../components/pageTitle/PageTitle";
import { TYPE_TOAST } from "../../constants/typeToast";

function ProductPage() {
  const [counterValue, setCounterValue] = useState(1);
  const productData = useSelector(getCurrentProduct) as Product;
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    return () => {
      dispatch(removeCurrentProduct());
    };
  }, []);

  const {
    barcode,
    picture,
    name,
    description: { __cdata: description } = { __cdata: "" },
    price,
  } = productData;

  const incrementQty = () => {
    setCounterValue((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (counterValue > 1) {
      setCounterValue((prev) => prev - 1);
    }
  };

  const addProductToCart = () => {
    dispatch(
      addToCart({
        id: barcode || 0,
        title: name,
        image: picture,
        price: price,
        quantity: counterValue,
      })
    );
    notification("Товар додано до кошика", TYPE_TOAST.SUCCESS);
  };
  return (
    <>
      {Object.keys(productData).length ? (
        <div className="product-page">
          <div className="container">
            <PageTitle text={name || ""} />
            <div className="product">
              <div className="product-image">
                <LazyImage src={picture} alt={name} />
              </div>
              <div className="product-summary">
                <p className="product-title">{name}</p>
                {price && (
                  <div className="product-price">
                    <p>{currencyConversion(price)}</p>
                  </div>
                )}
                <div className="product-services-part">
                  <Counter
                    quantity={counterValue}
                    incrementQty={incrementQty}
                    decrementQty={decrementQty}
                    theme={theme}
                  />
                  <div onClick={addProductToCart}>
                    <TextButton text="Додати до кошика" />
                  </div>
                </div>
              </div>
            </div>
            {description && <p className="description">{description}</p>}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductPage;
