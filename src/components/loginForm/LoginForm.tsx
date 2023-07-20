import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { TYPE_TOAST } from "../../constants/typeToast";
import { ROUTES } from "../../routing/routes";
import { setActiveUser } from "../../redux/slices/authSlice";
import LazyImage from "../lazyImage/LazyImage";
import googleLogo from "../../assets/icon/google-logo.png";
import { notification } from "../../services/services";

interface LoginFormProps {
  toggleForm: (formType: "login" | "registration" | "resetPassword") => void;
  showLoader: () => void;
  hideLoader: () => void;
}

function LoginForm({ toggleForm, showLoader, hideLoader }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      notification("Будь ласка, заповніть усі поля", TYPE_TOAST.ERROR);
    } else {
      showLoader();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setEmail("");
          setPassword("");
          successfulResultHandler(user);
        })
        .catch((error) => {
          hideLoader();
          const errorMessage = error.message;
          firebaseErrorMessage(errorMessage);
        });
    }
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    showLoader();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        successfulResultHandler(user);
      })
      .catch((error) => {
        hideLoader();
        const errorMessage = error.message;
        firebaseErrorMessage(errorMessage);
      });
  };

  const successfulResultHandler = (userInfo: any) => {
    hideLoader();
    notification("вхід успішний", TYPE_TOAST.SUCCESS);
    dispatch(
      setActiveUser({
        userPhoto: userInfo.photoURL,
        email: userInfo.email,
        userName: userInfo.displayName,
        userId: userInfo.uid,
      })
    );
    navigate(ROUTES.index);
  };
  const firebaseErrorMessage = (errorMessage: string) => {
    notification(errorMessage.slice(10), TYPE_TOAST.ERROR);
  };

  return (
    <div className="login-form">
      <p className="page-title">Вхід</p>
      <div className="login-button" onClick={signInWithGoogle}>
        <div className="login-button-icon">
          <LazyImage src={googleLogo} alt="Google icon" />
        </div>
        <p>Google</p>
      </div>
      <p className="offer-text">
        <span>або</span>
      </p>
      <form className="sign-in-form" onSubmit={loginUser}>
        <div className="input-wrap">
          <div className="input-group">
            <label htmlFor="email">Ел. пошта:</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="on"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="login-button sign-up-button">
          <p>Увійти</p>
        </button>
      </form>
      <div className="question-link-wrap">
        <p className="question-link" onClick={() => toggleForm("registration")}>
          Немає облікового запису? Реєструйтесь.
        </p>
        <p
          className="question-link"
          onClick={() => toggleForm("resetPassword")}
        >
          Забули свій пароль? Скинути тут.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
