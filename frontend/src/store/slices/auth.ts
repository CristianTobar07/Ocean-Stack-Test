import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";
import * as API from "Api/auth";
import { displayLoader, removeProcess } from "./loading";
import { DataUser, LoginUser, ResponseGetDataUser } from "interfaces/auth";

type InitialState = {
  isReloadNeeded: boolean;
  dataUser?: DataUser;
};
const initialState: InitialState = {
  isReloadNeeded: false,
  dataUser: undefined,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<DataUser>) => {
      state.dataUser = action.payload;
    },
  },
});
export const {} = slice.actions;

export const setLoginUser =
  (values: LoginUser): AppThunk =>
  async (dispatch) => {
    const idProcess: string = dispatch(displayLoader());
    try {
      const response: any = await API.setLoginUser(values);
      localStorage.setItem("token", response.token);
      dispatch(slice.actions.setDataUser(response.data));
      dispatch(removeProcess(idProcess));
      return response;
    } catch (error) {
      dispatch(removeProcess(idProcess));
    }
  };

export const getDataUser = (): AppThunk => async (dispatch) => {
  const idProcess: string = dispatch(displayLoader());
  try {
    const response: ResponseGetDataUser = await API.getDataUser();
    dispatch(slice.actions.setDataUser(response.data));
    dispatch(removeProcess(idProcess));
    return response;
  } catch (error) {
    dispatch(removeProcess(idProcess));
  }
};

export default slice.reducer;
