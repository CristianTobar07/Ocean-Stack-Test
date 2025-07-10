import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "components/molecules/ProductsCard";
import { Product } from "interfaces/products";
import bgImage from "assets/bacground.webp";
import ProductAddedCard from "components/molecules/ProductsAddedCard";
import OrderSummary from "components/molecules/OrdersSummary";

interface Props {
  products: Product[];
  handleAddDelete: (product: Product) => void;
  categorie: number;
  totalToPay: number;
  handleCreateBuy?: () => void;
}

const ProductGrid: React.FC<Props> = ({
  products,
  handleAddDelete,
  categorie,
  totalToPay,
  handleCreateBuy,
}) => (
  <Box
    sx={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      m: 0,
      p: 0,
    }}
  >
    <Grid container spacing={2} sx={{ m: 0, p: 4 }}>
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.uid}>
              {categorie === 1 ? (
                <ProductCard
                  product={product}
                  onAdd={() => handleAddDelete(product)}
                />
              ) : (
                <ProductAddedCard
                  product={product}
                  onAdd={() => handleAddDelete(product)}
                />
              )}
            </Grid>
          ))}
        </>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "start", width: "100%" }}>
          No hay productos disponibles
        </Typography>
      )}

      {categorie === 2 && totalToPay > 0 && (
        <OrderSummary totalPrice={totalToPay} onCreateOrder={handleCreateBuy} />
      )}
    </Grid>
  </Box>
);

export default ProductGrid;
