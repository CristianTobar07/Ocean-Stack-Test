import DashboardLayout from "components/templates/DashboardLayout";
import { Product } from "interfaces/products";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAllProducts, setAddProduct } from "store/slices/products";
import { RootState } from "store/store";

const allProducts: Product[] = [];

const DashboardProductsPage = () => {
  const dispatch = useAppDispatch();

  const { isRealoadNeeded, products } = useAppSelector((state: RootState) => {
    return state.products;
  });

  useEffect(() => {
    if (products.length === 0 || isRealoadNeeded) {
      dispatch(getAllProducts());
    }
  }, [dispatch, isRealoadNeeded, products]);

  const handleAddProduct = (product: Product) => {
    dispatch(setAddProduct(product));
    toast.success("Producto agregado correctamente");
  };

  return <DashboardLayout products={products} onAddDelete={handleAddProduct} />;
};

export default DashboardProductsPage;
