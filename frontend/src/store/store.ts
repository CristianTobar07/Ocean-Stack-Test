import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import Auth from "./slices/auth";
import Loading from "./slices/loading";
import Products from "./slices/products";
import Orders from "./slices/orders";

export const store = configureStore({
  reducer: {
    auth: Auth,
    loading: Loading,
    products: Products,
    orders: Orders,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppThunkTemplate<T> = ThunkAction<
  T,
  RootState,
  unknown,
  Action<string>
>;
