import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { TYPE_TOAST } from "../../constants/typeToast";
import { notification } from "../../services/services";
import { firebaseErrorMessage } from "../../services/firebaseErrorMessage";

interface RegisterFormProps {
  toggleForm: (formType: "login" | "registration" | "resetPassword") => void;
  showLoader: () => void;
  hideLoader: () => void;
}

function RegisterForm({
  toggleForm,
  showLoader,
  hideLoader,
}: RegisterFormProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signUpUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      (userName.length ||
        email.length ||
        password.length ||
        passwordConfirm.length) === 0
    ) {
      notification("будь ласка, заповніть усі поля", TYPE_TOAST.ERROR);
    } else if ((password.length && passwordConfirm.length) < 6) {
      notification("Пароль має бути не менше 6 символів", TYPE_TOAST.INFO);
    } else if (password !== passwordConfirm) {
      notification("Паролі не збігаються", TYPE_TOAST.ERROR);
    } else {
      showLoader();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          hideLoader();
          setUserName("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
          notification("Реєстрація пройшла успішно", TYPE_TOAST.SUCCESS);
        })
        .then(() => {
          if (auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: userName,
            });
          }
          toggleForm("login");
        })
        .catch((error) => {
          hideLoader();
          const errorMessage = error.message;
          firebaseErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="register-form">
      <p className="page-title">Зареєструватися зараз</p>
      <form className="sign-up-form " onSubmit={signUpUser}>
        <div className="input-wrap">
          <div className="input-group">
            <label htmlFor="name">Ім'я:</label>
            <input
              type="text"
              name="name"
              value={userName}
              id="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
          <div className="input-group">
            <label htmlFor="pass-confirm">Підтвердити пароль:</label>
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              autoComplete="on"
              id="passwordConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="login-button sign-up-button">
          <p>Зареєструватися</p>
        </button>
      </form>
      <p className="question-link" onClick={() => toggleForm("login")}>
        Вже є аккаунт? Увійдіть тут.
      </p>
    </div>
  );
}

export default RegisterForm;
