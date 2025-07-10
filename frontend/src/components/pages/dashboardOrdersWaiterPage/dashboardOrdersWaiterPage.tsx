import { ReusableModal } from "components/organism/Modal";
import DashboardWaiterLayout from "components/templates/DashboardWaiterLayout";
import { Product, ProductFormType } from "interfaces/products";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDataUser } from "store/slices/auth";
import { getAllOrders, setIsModalProducts } from "store/slices/orders";
import { createProduct } from "store/slices/products";
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
    if (orders.length === 0 || isRealoadNeeded) {
      dispatch(getAllOrders());
    }
  }, [dispatch, isRealoadNeeded, orders]);

  useEffect(() => {
    if (!dataUser || isReloadNeededAuth) {
      dispatch(getDataUser());
    }
  }, [dispatch, isReloadNeededAuth, dataUser]);

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
