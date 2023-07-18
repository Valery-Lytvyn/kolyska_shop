import { TYPE_TOAST } from "../constants/typeToast";
import { notification } from "./services";

export const firebaseErrorMessage = (errorMessage: string) =>
  notification(errorMessage.slice(10), TYPE_TOAST.ERROR);
