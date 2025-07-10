import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";
import { displayLoader, removeProcess } from "./loading";
import * as Api from "Api/orders";
import { Order, ResponseGetAllOrders } from "interfaces/orders";

type InitialState = {
  isRealoadNeeded: boolean;
  orders: Order[];
};
const initialState: InitialState = {
  isRealoadNeeded: true,
  orders: [],
};
export const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setorders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      state.isRealoadNeeded = false;
    },
  },
});

export const {} = slice.actions;

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
