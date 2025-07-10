import DashboardLayout from "components/templates/DashboardLayout";
import { Product } from "interfaces/products";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAllProducts } from "store/slices/products";
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
    
  };

  const handleCategorySelect = (category: string) => {
   
  };

  return (
    <DashboardLayout
      categories={["Productos", "Agregados"]}
      products={products}
      onAdd={handleAddProduct}
      onCategorySelect={handleCategorySelect}
    />
  );
};

export default DashboardProductsPage;
