export interface ResponseGetAllProducts {
  data: Product[];
  status: boolean;
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
  uid: string;
}
