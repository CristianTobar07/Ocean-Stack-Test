import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";
import { displayLoader, removeProcess } from "./loading";
import * as Api from "Api/products";
import { Product, ResponseGetAllProducts } from "interfaces/products";

type InitialState = {
  isRealoadNeeded: boolean;
  products: Product[];
  productsAdded: Product[];
};
const initialState: InitialState = {
  isRealoadNeeded: true,
  products: [],
  productsAdded: [],
};
export const slice = createSlice({
  name: "suscription",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isRealoadNeeded = false;
    },
  },
});

export default slice.reducer;

export const getAllProducts = (): AppThunk => async (dispatch) => {
  const idProcess: string = dispatch(displayLoader());
  try {
    const response: ResponseGetAllProducts = await Api.getAllProducts();
    dispatch(slice.actions.setProducts(response.data));
    dispatch(removeProcess(idProcess));
    return true;
  } catch (error: any) {
    dispatch(removeProcess(idProcess));
    return false;
  }
};
