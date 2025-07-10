import DashboardWaiterLayout from "components/templates/DashboardWaiterLayout";
import { Product } from "interfaces/products";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDataUser } from "store/slices/auth";
import { getAllOrders } from "store/slices/orders";
import { RootState } from "store/store";

const dashboardOrdersWaiterPage = () => {
  const dispatch = useAppDispatch();

  const { isRealoadNeeded, orders } = useAppSelector((state: RootState) => {
    return state.orders;
  });

  const { isReloadNeeded: isReloadNeededAuth, dataUser } = useAppSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useEffect(() => {
    if (orders.length === 0 || isRealoadNeeded) {
      dispatch(getAllOrders());
    }
  }, [dispatch, isRealoadNeeded, orders]);

  useEffect(() => {
    if (!dataUser || isReloadNeededAuth) {
      dispatch(getDataUser());
    }
  }, [dispatch, isReloadNeededAuth, dataUser]);

  const handleAddProduct = (order: Product) => {};

  return (
    <DashboardWaiterLayout orders={orders} onAddDelete={handleAddProduct} />
  );
};

export default dashboardOrdersWaiterPage;
