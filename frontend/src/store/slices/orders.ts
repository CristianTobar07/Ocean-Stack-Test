import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";
import { displayLoader, removeProcess } from "./loading";
import * as Api from "Api/orders";
import {
  Order,
  ProductsOrder,
  ResponseGetAllOrders,
  ResponseGetOrderByID,
  ResponseOrder,
} from "interfaces/orders";
import { Product } from "interfaces/products";

type InitialState = {
  isRealoadNeeded: boolean;
  orders: Order[];
  productsOfOrder: Product[];
  isModalProducts: boolean;
};
const initialState: InitialState = {
  isRealoadNeeded: true,
  orders: [],
  productsOfOrder: [],
  isModalProducts: false,
};
export const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setorders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      state.isRealoadNeeded = false;
    },
    setProductsOfOrder: (state, action: PayloadAction<Product[]>) => {
      state.productsOfOrder = action.payload;
    },
    setIsModalProducts: (state, action: PayloadAction<boolean>) => {
      state.isModalProducts = action.payload;
    },
  },
});

export const { setIsModalProducts } = slice.actions;

export default slice.reducer;

export const getAllOrders = (): AppThunk => async (dispatch) => {
  const idProcess: string = dispatch(displayLoader());
  try {
    const response: ResponseGetAllOrders = await Api.getAllOrdes();
    dispatch(slice.actions.setorders(response.data));
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

export const getOrderById =
  (orderId: string): AppThunk =>
  async (dispatch) => {
    const idProcess: string = dispatch(displayLoader());
    try {
      const response: ResponseGetOrderByID = await Api.getOrderById(orderId);
      dispatch(slice.actions.setProductsOfOrder(response.data));
      dispatch(removeProcess(idProcess));
      return response;
    } catch (error: any) {
      dispatch(removeProcess(idProcess));
      return false;
    }
  };
