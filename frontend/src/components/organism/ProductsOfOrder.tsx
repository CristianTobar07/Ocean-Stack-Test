import React from "react";
import { useAppSelector } from "store/hooks";
import { RootState } from "store/store";
import { Grid, Typography } from "@mui/material";
import ProductCard from "components/molecules/ProductCard";

const productsOfOrderOfOrder = () => {
  const { productsOfOrder } = useAppSelector((state: RootState) => {
    return state.orders;
  });

  return (
    <div>
      <Grid container spacing={2} sx={{ m: 0, p: 4 }}>
        {productsOfOrder.length > 0 ? (
          <>
            {productsOfOrder.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.uid}>
                <ProductCard
                  product={product}
                  onAdd={() => {}}
                  disableAdd={true}
                />
              </Grid>
            ))}
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "start", width: "100%" }}>
            No hay productos disponibles
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default productsOfOrderOfOrder;
