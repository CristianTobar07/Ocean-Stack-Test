import axios from "axios";
import { APIURL } from "common/constants";

export const getAllProducts = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${APIURL}/api/products`,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};
