import { Navigate } from "react-router-dom";
import { ROUTES } from "routes/constants";

const Redirect = () => {
  return <Navigate to={ROUTES.LANDING_PAGE} />;
};

export default Redirect;
