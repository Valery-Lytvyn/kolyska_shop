import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import { firebaseErrorMessage } from "../../services/firebaseErrorMessage";
import { TYPE_TOAST } from "../../constants/typeToast";
import { notification } from "../../services/services";

interface ResetPasswordFormProps {
  toggleForm: (formType: "login" | "registration" | "resetPassword") => void;
  showLoader: () => void;
  hideLoader: () => void;
}

function ResetPasswordForm({
  toggleForm,
  showLoader,
  hideLoader,
}: ResetPasswordFormProps) {
  const [email, setEmail] = useState("");
  const resetPassword = (e: React.SyntheticEvent) => {
    e.preventDefault();
    showLoader();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        hideLoader();
        notification(
          "Перевірте свою електронну пошту, щоб знайти посилання для скидання",
          TYPE_TOAST.SUCCESS
        );
        setEmail("");
      })
      .catch((error) => {
        hideLoader();
        const errorMessage = error.message;
        firebaseErrorMessage(errorMessage);
      });
  };
  return (
    <div className="login-form">
      <p className="page-title">Скинути пароль</p>
      <form className="sign-in-form" onSubmit={resetPassword}>
        <div className="input-wrap">
          <label htmlFor="email">Ел. пошта:</label>{" "}
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button sign-up-button">
          <p>Скинути пароль</p>
        </button>
      </form>
      <div className="question-link-wrap">
        <p className="question-link" onClick={() => toggleForm("login")}>
          Вже є аккаунт? Увійдіть тут.
        </p>
        <p className="question-link" onClick={() => toggleForm("registration")}>
          Немає облікового запису? Реєструйтесь.
        </p>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
