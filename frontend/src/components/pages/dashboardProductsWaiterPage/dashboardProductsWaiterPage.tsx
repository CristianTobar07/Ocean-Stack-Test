import DashboardWaiterLayout from "components/templates/DashboardWaiterLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDataUser } from "store/slices/auth";
import { getAllProducts } from "store/slices/products";
import { RootState } from "store/store";

const dashboardProductsWaiterPage = () => {
  const dispatch = useAppDispatch();

  const { isRealoadNeeded, products } = useAppSelector((state: RootState) => {
    return state.products;
  });

  const { isReloadNeeded: isReloadNeededAuth, dataUser } = useAppSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useEffect(() => {
    if (products.length === 0 && isRealoadNeeded) {
      dispatch(getAllProducts());
    }
  }, [dispatch, isRealoadNeeded, products]);

  useEffect(() => {
    if (!dataUser || isReloadNeededAuth) {
      dispatch(getDataUser());
    }
  }, [dispatch, isReloadNeededAuth, dataUser]);

  if (!dataUser) return null;

  return (
    <DashboardWaiterLayout
      dataUser={dataUser}
      products={products}
      orders={[]}
    />
  );
};

export default dashboardProductsWaiterPage;
