import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "components/molecules/ProductsCard";
import { Product } from "interfaces/products";
import bgImage from "assets/bacground.webp";

interface Props {
  products: Product[];
  onAdd: (product: Product) => void;
}

const ProductGrid: React.FC<Props> = ({ products, onAdd }) => (
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
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} onAdd={() => onAdd(product)} />
            </Grid>
          ))}
        </>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "start", width: "100%" }}>
          No hay productos disponibles
        </Typography>
      )}
    </Grid>
  </Box>
);

export default ProductGrid;
