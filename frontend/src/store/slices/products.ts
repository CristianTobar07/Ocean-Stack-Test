import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";
import { displayLoader, removeProcess } from "./loading";
import * as Api from "Api/products";
import { Product, ResponseGetAllProducts } from "interfaces/products";
import { ProductsOrder, ResponseOrder } from "interfaces/orders";

type InitialState = {
  isRealoadNeeded: boolean;
  products: Product[];
  productsAdded: Product[];
  totalToPay: number;
};
const initialState: InitialState = {
  isRealoadNeeded: true,
  products: [],
  productsAdded: [],
  totalToPay: 0,
};
export const slice = createSlice({
  name: "suscription",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isRealoadNeeded = false;
    },
    setAddProduct: (state, action: PayloadAction<Product>) => {
      const productIndex = state.productsAdded.findIndex(
        (product) => product.uid === action.payload.uid
      );

      if (productIndex === -1) {
        state.productsAdded.push({ ...action.payload, quantity: 1 });
      } else {
        state.productsAdded[productIndex].quantity += 1;
      }

      state.totalToPay = state.productsAdded.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    setDeleteProduct: (state, action: PayloadAction<Product>) => {
      state.productsAdded = state.productsAdded.filter(
        (product) => product.uid !== action.payload.uid
      );

      state.totalToPay = state.productsAdded.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    resetProductsAdded: (state) => {
      state.productsAdded = [];
      state.totalToPay = 0;
      state.isRealoadNeeded = true;
    },
  },
});

export const { setAddProduct, setDeleteProduct, resetProductsAdded } =
  slice.actions;

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

export const createOrder = (): AppThunk => async (dispatch, getState) => {
  const idProcess: string = dispatch(displayLoader());
  try {
    const newProducts = getState().products.productsAdded;
    const productsOrder: ProductsOrder[] = newProducts.map((product) => ({
      uid: product.uid,
      quantity: product.quantity,
    }));
    const response: ResponseOrder = await Api.createOrder(productsOrder);
    dispatch(removeProcess(idProcess));
    return response;
  } catch (error: any) {
    dispatch(removeProcess(idProcess));
    return false;
  }
};
