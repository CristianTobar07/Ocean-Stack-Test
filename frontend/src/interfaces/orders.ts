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
