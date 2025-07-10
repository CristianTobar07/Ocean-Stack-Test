import axios from "axios";
import { APIURL } from "common/constants";
import { getToken } from "helpers/getToken";
import { ProductsOrder } from "interfaces/orders";

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

export const getOrderById = async (orderId: string) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
        "access-token": getToken(),
      },
      method: "GET",
      url: `${APIURL}/api/orders/${orderId}`,
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};

export const createOrder = async (products: ProductsOrder[]) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${APIURL}/api/orders`,
      data: { products },
    });

    return response?.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response?.data;
  }
};
