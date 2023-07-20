import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartData {
  id: number;
  title: string;
  image: string;
  price: string;
  quantity: number;
  total: number;
}

interface CartState {
  cartData: CartData[];
  purchasePrice: number;
}

const initialState: CartState = {
  cartData: [],
  purchasePrice: 0,
};

const findItem = (
  state: CartState,
  action: PayloadAction<CartData>
): CartData | undefined => {
  return state.cartData.find((item) => item.id === action.payload.id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = findItem(state, action);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartData.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = findItem(state, action);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = findItem(state, action);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    updateCartTotal: (state, action) => {
      const item = findItem(state, action);
      if (item !== undefined) {
        const price = parseFloat(item.price); // Parse the price as a float
        item.total = +(price * item.quantity).toFixed(0);
      }
    },
    calcAmount: (state) => {
      state.purchasePrice = state.cartData.reduce(
        (sum, item) => sum + item.total,
        0
      );
    },
    removeItem: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.cartData = [];
    },
  },
});

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  updateCartTotal,
  calcAmount,
  resetCart,
} = cartSlice.actions;
export const getCartData = (state: RootState) => state.cart.cartData;
export const getQuantity = (state: RootState) =>
  state.cart.cartData.reduce((sum, item) => sum + item.quantity, 0);
export const getPurchasePrice = (state: RootState) =>
  state.cart.cartData.reduce((sum, item) => sum + item.total, 0);
export default cartSlice.reducer;
