import { toast } from "react-toastify";
import { CATEGORY_ID } from "../constants/constants";

export const getRndInteger = (max: number, min = 1) =>
  (Math.random() * (max - min) + min).toFixed(1);

export const currencyConversion = (value: string | number) => {
  if (value) {
    let number = value;
    if (typeof value === "string") {
      number = parseInt(value, 10);
    }
    const price = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${price} грн`;
  }
};

export const notification = (
  text: string,
  type: "success" | "info" | "warning" | "error"
) => {
  toast(text, {
    type: type,
  });
};

export const choiceSelectedCategoryId = (category: string): number => {
  const categoryID = {
    childrenStrollers: CATEGORY_ID.strollers,
    walkers: CATEGORY_ID.walkers,
    carSeats: CATEGORY_ID.carSeats,
    childrenTransport: CATEGORY_ID.childrenTransport,
    playgrounds: CATEGORY_ID.playgrounds,
    swing: CATEGORY_ID.swing,
    chairs: CATEGORY_ID.chairs,
  }[category];
  return categoryID || 0;
};

export const capitalizeFirstLetter = (text: string) => {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};
