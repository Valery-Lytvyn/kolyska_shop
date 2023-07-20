import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartData,
  updateCartTotal,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/slices/cartSlice";
import { setCurrentProduct } from "../../redux/slices/productsSlice";
import LazyImage from "../lazyImage/LazyImage";
import { currencyConversion, notification } from "../../services/services";
import Counter from "../counter/Counter";
import { ThemeContext } from "../../layout/Layout";
import ImageButton from "../imageButton/ImageButton";
import { ROUTES } from "../../routing/routes";
import { TYPE_TOAST } from "../../constants/typeToast";
import trash from "../../assets/icon/icons8-waste-64.png";
import "./cartItem.scss";

interface CartItemProps {
  itemData: CartData;
}

function CartItem({ itemData }: CartItemProps) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, image, title, price, quantity, total } = itemData;

  const incrementQty = () => {
    dispatch(
      incrementQuantity({
        id: id,
      })
    );
  };

  const decrementQty = () => {
    if (quantity === 1) {
      dispatch(
        removeItem({
          id: id,
        })
      );
    } else {
      dispatch(
        decrementQuantity({
          id: id,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      updateCartTotal({
        id: id,
      })
    );
  }, [quantity]);

  const removeProduct = () => {
    dispatch(
      removeItem({
        id: id,
      })
    );
    notification("Товар видалено з кошика", TYPE_TOAST.SUCCESS);
  };

  const handleProductClick = () => {
    dispatch(setCurrentProduct(id));
    navigate(ROUTES.product(id));
  };

  return (
    <div className="cart-table">
      <div className="cart-table-product" onClick={handleProductClick}>
        <div className="item-image">
          <LazyImage src={image} alt={title} />
        </div>
        <p className="item-name">{title}</p>
      </div>
      <div className="cart-table-description">
        <div className="cart-table-price">
          <p className="cost">{currencyConversion(price)}</p>
        </div>
        <div className="cart-table-quantity">
          <Counter
            quantity={quantity}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
            theme={theme}
          />
          <div className="trash-button" onClick={removeProduct}>
            <ImageButton src={trash} alt="кошик" theme={theme} />
          </div>
        </div>
        <div className="cart-table-total">
          <p className="cost">{currencyConversion(total)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
