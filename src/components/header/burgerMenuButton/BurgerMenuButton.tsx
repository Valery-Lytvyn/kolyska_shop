import React from "react";
import burgerMenu from "../../../assets/icon/icons8-menu-64.png";
import close from "../../../assets/icon/icons8-close-64.png";
import ImageButton from "../../imageButton/ImageButton";
import "./burgerMenuButton.scss";

interface BurgerButtonProps {
  isShowButton: boolean;
  theme: string;
  toggleBurgerButton: () => void;
}

function BurgerMenuButton({
  isShowButton,
  theme,
  toggleBurgerButton,
}: BurgerButtonProps) {
  return (
    <div onClick={toggleBurgerButton} className="burger-menu-button">
      {isShowButton ? (
        <ImageButton src={burgerMenu} alt="бургер меню" theme={theme} />
      ) : (
        <ImageButton src={close} alt="закрити бургер меню" theme={theme} />
      )}
    </div>
  );
}

export default BurgerMenuButton;
