import { createSlice } from "@reduxjs/toolkit";
import { Product, allProductsData } from "../../constants/allProductsData";
import { RootState } from "../store";

interface ProductsState {
  allProducts: Product[];
  filteredProducts: Product[];
  currentProduct: Product | object;
  searchedProducts: Product[];
}

const initialState: ProductsState = {
  allProducts: [...allProductsData],
  filteredProducts: [],
  searchedProducts: [],
  currentProduct: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductCategory: (state, action) => {
      const filteredProductsList = allProductsData.filter(
        (obj) => obj.categoryId === action.payload
      );
      state.filteredProducts = [...filteredProductsList];
    },
    setCurrentProduct: (state, action) => {
      const filteredProduct = allProductsData.find(
        (obj) => obj.barcode === action.payload
      );
      state.currentProduct = filteredProduct ?? {};
    },
    removeCurrentProduct: (state) => {
      state.currentProduct = {};
    },
    searchProduct: (state, action) => {
      const searchedProductsList = allProductsData.filter(
        (obj) =>
          obj.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          obj.vendorCode.toLowerCase().includes(action.payload.toLowerCase()) ||
          (obj.description &&
            obj.description.__cdata &&
            obj.description.__cdata
              .toLowerCase()
              .includes(action.payload.toLowerCase()))
      );
      state.searchedProducts = searchedProductsList;
    },
  },
});
export const {
  filterProductCategory,
  setCurrentProduct,
  removeCurrentProduct,
  searchProduct,
} = productsSlice.actions;
export const getAllProducts = (state: RootState) => state.products.allProducts;
export const getFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const getCurrentProduct = (state: RootState) =>
  state.products.currentProduct;
export const getSearchedProducts = (state: RootState) =>
  state.products.searchedProducts;
export default productsSlice.reducer;
