import { Product } from "./products";

export interface RequestOrder {
  products: ProductsOrder[];
}

export interface ProductsOrder {
  uid: string;
  quantity: number;
}

export interface ResponseOrder {
  status: boolean;
  msg: string;
}

export interface ResponseGetAllOrders {
  status: boolean;
  data: Order[];
}

export interface Order {
  products: DataProduct[];
  date: Date;
  uid: string;
}

export interface DataProduct {
  uid: string;
  quantity: number;
}

export interface ResponseGetOrderByID {
  status: string;
  data: Product[];
}
