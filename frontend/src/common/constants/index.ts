import { SidebarCategories } from "interfaces/sidebarCategories";
import { ROUTES } from "routes/constants";

export const APIURL = import.meta.env.VITE_API_URL;

export const categoriesClients: SidebarCategories[] = [
  {
    name: "Productos",
    path: ROUTES.PRODUCTS_PAGE,
  },
  { name: "Agregados", path: ROUTES.PRODUCTS_ADDED_PAGE },
];

export const categoriesWaiters: SidebarCategories[] = [
  {
    name: "Productos",
    path: ROUTES.WAITER_PRODUCTS_PAGE,
  },
  { name: "Ordenes", path: ROUTES.WAITER_ORDERS_PAGE },
];
