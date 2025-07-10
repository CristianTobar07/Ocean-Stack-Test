import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "components/molecules/ProductCard";
import { Product } from "interfaces/products";
import bgImage from "assets/bacground.webp";
import ProductAddedCard from "components/molecules/ProductsAddedCard";
import OrderSummary from "components/molecules/OrdersSummary";

interface Props {
  products: Product[];
  handleAddDelete?: (product: Product) => void;
  categorie: number;
  totalToPay?: number;
  handleCreateBuy?: () => void;
  disableAdd?: boolean;
}

const ProductGrid: React.FC<Props> = ({
  products,
  handleAddDelete = () => {},
  categorie,
  totalToPay = 0,
  handleCreateBuy = () => {},
  disableAdd = false,
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
            <Grid key={product.uid}>
              {categorie === 1 ? (
                <ProductCard
                  product={product}
                  onAdd={() => handleAddDelete(product)}
                  disableAdd={disableAdd}
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
