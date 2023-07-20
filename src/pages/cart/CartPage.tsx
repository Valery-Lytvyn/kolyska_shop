import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";
import {
  calcAmount,
  getCartData,
  getPurchasePrice,
  resetCart,
} from "../../redux/slices/cartSlice";
import CartItem from "../../components/cartItem/CartItem";
import { ROUTES } from "../../routing/routes";
import TextButton from "../../components/textButton/TextButton";
import PageSubtitle from "../../components/pageSubtitle/PageSubtitle";
import { notification } from "../../services/services";
import { TYPE_TOAST } from "../../constants/typeToast";
import "./cartPage.scss";

function CartPage() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(getCartData);
  const totalSum = useSelector(getPurchasePrice);

  useEffect(() => {
    dispatch(calcAmount());
  });

  const clearCart = () => {
    dispatch(resetCart());
    notification("Кошик очищено", TYPE_TOAST.SUCCESS);
  };

  const mouseClickHandler = () => {
    notification("Ваше замолення прийняте", TYPE_TOAST.SUCCESS);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <Link to={ROUTES.index}>
          <div className="cart-button">
            <TextButton text="Продовжити покупки" />
          </div>
        </Link>
        {cartProducts.length === 0 ? (
          <PageSubtitle text="Ваш кошик порожній" />
        ) : (
          <>
            <div className="cart-table">
              <div className="cart-table-product">
                <p className="table-title">Товар</p>
              </div>
              <div className="cart-table-description">
                <div className="cart-table-price">
                  <p className="table-title">Ціна</p>
                </div>
                <div className="cart-table-quantity">
                  <p className="table-title">Кількість</p>
                </div>
                <div className="cart-table-total">
                  <p className="table-title">Всього</p>
                </div>
              </div>
            </div>
            {cartProducts.map((item) => (
              <CartItem itemData={item} key={item.id} />
            ))}
            <div className="cart-total-sum">
              <p>Всього: </p>
              <p className="cost">
                <CountUp
                  end={totalSum}
                  duration={1.2}
                  separator=" "
                  decimals={0}
                  decimal="."
                  suffix="грн"
                />
              </p>
            </div>
            <div className="cart-service-buttons">
              <div onClick={clearCart} className="cart-button">
                <TextButton text="Очистити корзину" />
              </div>
              <div className="cart-button" onClick={mouseClickHandler}>
                <TextButton text="Оформити замовлення" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
