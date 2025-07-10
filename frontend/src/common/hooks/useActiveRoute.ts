import { useLocation } from "react-router-dom";

export const useActiveRoute = (route: string) => {
  const location = useLocation();
  return location.pathname === route;
};
