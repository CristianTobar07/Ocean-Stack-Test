import axios from "axios";
import { APIURL } from "common/constants";
import { getToken } from "helpers/getToken";

export const getAllOrdes = async () => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
        "access-token": getToken(),
      },
      method: "GET",
      url: `${APIURL}/api/orders`,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};
