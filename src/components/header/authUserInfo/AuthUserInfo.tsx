import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { getUserData, removeActiveUser } from "../../../redux/slices/authSlice";
import { resetCart } from "../../../redux/slices/cartSlice";
import { TYPE_TOAST } from "../../../constants/typeToast";
import { auth } from "../../../firebase.config";
import {
  capitalizeFirstLetter,
  notification,
} from "../../../services/services";
import { firebaseErrorMessage } from "../../../services/firebaseErrorMessage";
import Loader from "../../loader/Loader";
import userIcon from "../../../assets/icon/header_icons/icons8-user-64.png";
import logoutIcon from "../../../assets/icon/header_icons/icons8-logout-64.png";
import ImageButton from "../../imageButton/ImageButton";
import { ThemeContext } from "../../../layout/Layout";
import "./authUserInfo.scss";

function AuthUserInfo() {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const logoutUser = () => {
    showLoader();
    signOut(auth)
      .then(() => {
        hideLoader();
        dispatch(removeActiveUser());
        clearCart();
        notification("Вихід успішний.", TYPE_TOAST.SUCCESS);
      })
      .catch((error) => {
        hideLoader();
        const errorMessage = error.message;
        firebaseErrorMessage(errorMessage);
      });
  };
  const showLoader = () => {
    setIsLoading(true);
  };
  const hideLoader = () => {
    setIsLoading(false);
  };

  const clearCart = () => {
    dispatch(resetCart());
  };

  const { userName, userPhoto, userId } = userData;
  const displayedUsername = capitalizeFirstLetter(userName);

  return (
    <div className="auth-user-info">
      {isLoading && <Loader />}
      {displayedUsername && (
        <h6 className="user-info-display-name">
          Раді вітати, {displayedUsername || ""}
        </h6>
      )}
      <div className="service-btn  user-info-logo">
        {userPhoto ? (
          <img src={userPhoto} alt="лого користувача" />
        ) : (
          <div className="service-btn">
            <ImageButton src={userIcon} alt="авторизація" theme={theme} />
          </div>
        )}
      </div>
      {userId ? (
        <div className="service-btn" onClick={logoutUser}>
          <ImageButton src={logoutIcon} alt="вийти" theme={theme} />
        </div>
      ) : null}
    </div>
  );
}

export default AuthUserInfo;
