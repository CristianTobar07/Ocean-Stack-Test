export interface ResponseGetAllProducts {
  data: Product[];
  status: boolean;
}

export interface Product extends ProductFormType {
  uid: string;
}

export interface ProductFormType {
  name: string;
  price: number;
  quantity: number;
}
