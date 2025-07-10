import axios from "axios";
import { APIURL } from "common/constants";
import { ProductFormType } from "interfaces/products";
import { getToken } from "helpers/getToken";

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

export const createProduct = async (product: ProductFormType) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
        "access-token": getToken(),
      },
      method: "POST",
      url: `${APIURL}/api/products`,
      data: product,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};
