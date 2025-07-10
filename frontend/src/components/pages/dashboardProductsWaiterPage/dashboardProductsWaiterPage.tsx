import DashboardWaiterLayout from "components/templates/DashboardWaiterLayout";
import { Product } from "interfaces/products";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDataUser } from "store/slices/auth";
import { getAllProducts, setAddProduct } from "store/slices/products";
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
    if (products.length === 0 || isRealoadNeeded) {
      dispatch(getAllProducts());
    }
  }, [dispatch, isRealoadNeeded, products]);

  useEffect(() => {
    if (!dataUser || isReloadNeededAuth) {
      dispatch(getDataUser());
    }
  }, [dispatch, isReloadNeededAuth, dataUser]);

  const handleAddProduct = (product: Product) => {
    dispatch(setAddProduct(product));
    toast.success("Producto agregado correctamente");
  };

  if (!dataUser) return null;

  return (
    <DashboardWaiterLayout
      dataUser={dataUser}
      products={products}
      orders={[]}
      onAddDelete={handleAddProduct}
    />
  );
};

export default dashboardProductsWaiterPage;
