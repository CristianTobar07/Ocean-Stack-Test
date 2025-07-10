import DashboardLayout from "components/templates/DashboardLayout";
import { Product } from "interfaces/products";
import { useAppSelector } from "store/hooks";
import { RootState } from "store/store";

const DashboardProductsAddedPage = () => {
  const { productsAdded } = useAppSelector((state: RootState) => {
    return state.products;
  });

  const handleAddProduct = (product: Product) => {};

  return <DashboardLayout products={productsAdded} onAdd={handleAddProduct} />;
};

export default DashboardProductsAddedPage;
