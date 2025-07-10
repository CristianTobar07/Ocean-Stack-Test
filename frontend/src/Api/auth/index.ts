import axios from "axios";
import { APIURL } from "common/constants";
import { getToken } from "helpers/getToken";
import { LoginUser } from "interfaces/auth";

export const setLoginUser = async (formLogin: LoginUser) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${APIURL}/api/login`,
      data: formLogin,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};

export const getDataUser = async () => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
        "access-token": getToken(),
      },
      method: "GET",
      url: `${APIURL}/api/user`,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};
