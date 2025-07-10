export interface LoginUser {
  email: string;
  password: string;
}

export interface ResponseGetDataUser {
  data: DataUser;
  status: true;
}

export interface DataUser {
  name: string;
  email: string;
  user_type: number;
  uid: string;
}
