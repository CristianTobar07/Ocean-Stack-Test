import { ReusableModal } from "components/organism/Modal";
import DashboardWaiterLayout from "components/templates/DashboardWaiterLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDataUser } from "store/slices/auth";
import { getAllOrders, setIsModalProducts } from "store/slices/orders";
import { RootState } from "store/store";
import ProductsOfOrder from "components/organism/ProductsOfOrder";
import ImageModal from "assets/modalOrders.webp";

const dashboardOrdersWaiterPage = () => {
  const dispatch = useAppDispatch();

  const { isRealoadNeeded, orders, isModalProducts } = useAppSelector(
    (state: RootState) => {
      return state.orders;
    }
  );

  const { isReloadNeeded: isReloadNeededAuth, dataUser } = useAppSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useEffect(() => {
    if (isRealoadNeeded) {
      dispatch(getAllOrders());
    }
  }, [dispatch, isRealoadNeeded]);

  useEffect(() => {
    if (isReloadNeededAuth) {
      dispatch(getDataUser());
    }
  }, [dispatch, isReloadNeededAuth]);

  const handleCloseModal = () => {
    dispatch(setIsModalProducts(false));
  };

  if (!dataUser) return null;

  return (
    <>
      <DashboardWaiterLayout dataUser={dataUser} orders={orders} />{" "}
      <ReusableModal
        open={isModalProducts}
        title="Listado de Productos"
        onClose={handleCloseModal}
        backgroundImage={ImageModal}
      >
        <ProductsOfOrder />
      </ReusableModal>
    </>
  );
};

export default dashboardOrdersWaiterPage;
