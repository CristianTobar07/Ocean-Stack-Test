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
  products: Product[];
  date: Date;
  uid: string;
}

export interface Product {
  uid: string;
  quantity: number;
}
