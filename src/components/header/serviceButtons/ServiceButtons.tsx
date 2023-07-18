import search from "../../../assets/icon/header_icons/icons8-search-64.png";

import cart from "../../../assets/icon/header_icons/icons8-cart-64.png";
import moon from "../../../assets/icon/header_icons/icons8-moon-64.png";
import sun from "../../../assets/icon/header_icons/icons8-sun-64.png";

import ImageButton from "../../imageButton/ImageButton";
import "./serviceButtons.scss";
import { ROUTES } from "../../../routing/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuantity } from "../../../redux/slices/cartSlice";
import AuthUserInfo from "../authUserInfo/AuthUserInfo";

interface ServiceButtonsProps {
  toggleTheme: () => void;
  handleSearchButtonClick: () => void;
  theme: string;
}

function ServiceButtons({
  toggleTheme,
  handleSearchButtonClick,
  theme,
}: ServiceButtonsProps) {
  const currentProductQuantity = useSelector(getQuantity);

  return (
    <div
      className={`service-buttons ${
        theme === "light" ? "" : "light-style-service-buttons"
      } `}
    >
      <div className="service-btn">
        <ImageButton
          src={search}
          alt="пошук"
          clickButtonHandler={handleSearchButtonClick}
          theme={theme}
        />
      </div>
      <Link to={ROUTES.login}>
        {/* <div className="service-btn">
          <ImageButton src={user} alt="авторизація" theme={theme} />
        </div> */}
        <AuthUserInfo />
      </Link>
      <Link to={ROUTES.cart}>
        <div className="service-btn">
          <ImageButton src={cart} alt="кошик" theme={theme} />
          {currentProductQuantity > 0 && (
            <span className="product-quantity">{currentProductQuantity}</span>
          )}
        </div>{" "}
      </Link>
      <div className="service-btn">
        <ImageButton
          src={theme === "light" ? moon : sun}
          alt="світла/темна тема"
          clickButtonHandler={toggleTheme}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default ServiceButtons;
