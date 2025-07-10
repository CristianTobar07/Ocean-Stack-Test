import DashboardLayout from "components/templates/DashboardLayout";
import { Product } from "interfaces/products";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { createOrder } from "store/slices/orders";
import { resetProductsAdded, setDeleteProduct } from "store/slices/products";
import { RootState } from "store/store";

const DashboardProductsAddedPage = () => {
  const dispatch = useAppDispatch();

  const { productsAdded } = useAppSelector((state: RootState) => {
    return state.products;
  });

  const handleDeleteProduct = (product: Product) => {
    dispatch(setDeleteProduct(product));
    toast.success("Producto Eliminado correctamente");
  };

  const handleAddOrder = async () => {
    const res: any = await dispatch(createOrder());
    if (res.status) {
      toast.success("Orden creada correctamente");
      dispatch(resetProductsAdded());
    } else {
      toast.error(res.msg);
    }
  };

  return (
    <DashboardLayout
      products={productsAdded}
      onAddDelete={handleDeleteProduct}
      handleAddOrder={handleAddOrder}
    />
  );
};

export default DashboardProductsAddedPage;
