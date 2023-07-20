import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import LazyImage from "../lazyImage/LazyImage";
import { currencyConversion, notification } from "../../services/services";
import { addToCart } from "../../redux/slices/cartSlice";
import { ThemeContext } from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
import { setCurrentProduct } from "../../redux/slices/productsSlice";
import { TYPE_TOAST } from "../../constants/typeToast";
import { Product } from "../../constants/allProductsData";
import cart from "../../assets/icon/icons8-buy-64.png";
import "./singleProduct.scss";

interface SingleProductProps {
  itemData: Product;
}

function SingleProduct({ itemData }: SingleProductProps) {
  const [isShowButton, setIsShowButton] = useState(false);
  const { price, picture, name, barcode } = itemData;
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const navigator = useNavigate();

  const addProductToCart = () => {
    dispatch(
      addToCart({
        id: barcode,
        title: name,
        image: picture,
        price: price,
        quantity: 1,
      })
    );
    notification("Товар додано до кошика", TYPE_TOAST.SUCCESS);
  };
  const navigateToProductPage = () => {
    navigator(ROUTES.product(barcode || 0));
    dispatch(setCurrentProduct(barcode));
  };

  return (
    <>
      {itemData && price !== "0" && (
        <div
          className="single-product"
          onMouseEnter={() => setIsShowButton(true)}
          onMouseLeave={() => setIsShowButton(false)}
        >
          <div className="product-picture" onClick={navigateToProductPage}>
            <LazyImage src={picture} alt={name} />
          </div>
          <div className="product-description">
            <p className="product-name" onClick={navigateToProductPage}>
              {name}
            </p>
            {isShowButton && (
              <div
                className={`product-cart-image ${
                  theme === "light" ? "" : "light-style-product-cart-image"
                }`}
                onClick={addProductToCart}
              >
                <LazyImage src={cart} alt={"add to cart button"} />
              </div>
            )}
            <h2 className="product-price">{currencyConversion(price)}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
