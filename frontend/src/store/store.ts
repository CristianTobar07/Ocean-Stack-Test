import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import Loading from "./slices/loading";
import Products from "./slices/products";


export const store = configureStore({
  reducer: {
    loading: Loading,
    products: Products,
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
