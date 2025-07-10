import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Redirect from "../helpers/redirect";
import LandingPage from "components/pages/landingPage/LandingPage";
import DashboardProductsPage from "components/pages/dashboardProductsPage/DashboardProductsPage";
import DashboardProductsAddedPage from "components/pages/dashboardProductsAddedPage/DashboardProductsAddedPage";
import LoginPage from "components/pages/loginPage/LoginPage";
import dashboardProductsWaiterPage from "components/pages/dashboardProductsWaiterPage/dashboardProductsWaiterPage";
import dashboardOrdersWaiterPage from "components/pages/dashboardOrdersWaiterPage/dashboardOrdersWaiterPage";

const GlobalRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LANDING_PAGE} Component={LandingPage} />

          <Route path={ROUTES.LOGIN_PAGE} Component={LoginPage} />

          <Route
            path={ROUTES.PRODUCTS_PAGE}
            Component={DashboardProductsPage}
          />

          <Route
            path={ROUTES.PRODUCTS_ADDED_PAGE}
            Component={DashboardProductsAddedPage}
          />

          <Route
            path={ROUTES.WAITER_PRODUCTS_PAGE}
            Component={dashboardProductsWaiterPage}
          />

          <Route
            path={ROUTES.WAITER_ORDERS_PAGE}
            Component={dashboardOrdersWaiterPage}
          />

          <Route path="*" Component={Redirect} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default GlobalRoutes;
