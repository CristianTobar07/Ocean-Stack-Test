import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Redirect from "../helpers/redirect";
import LandingPage from "components/pages/landingPage/LandingPage";
import DashboardProductsPage from "components/pages/dashboardProductsPage/DashboardProductsPage";
import DashboardProductsAddedPage from "components/pages/dashboardProductsAddedPage/DashboardProductsAddedPage";

const GlobalRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={ROUTES.LANDING_PAGE} Component={LandingPage} />
          </Route>

          <Route
            path={ROUTES.PRODUCTS_PAGE}
            Component={DashboardProductsPage}
          />

          <Route
            path={ROUTES.PRODUCTS_ADDED_PAGE}
            Component={DashboardProductsAddedPage}
          />

          <Route path="*" Component={Redirect} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default GlobalRoutes;
