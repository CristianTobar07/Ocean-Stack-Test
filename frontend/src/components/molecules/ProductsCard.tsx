import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { Product } from "interfaces/products";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAdd }) => (
  <Card sx={{ maxHeight: 300 }}>
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2">Precio: ${product.price}</Typography>
      <Typography variant="body2">Disponible: {product.quantity}</Typography>
      <Stack mt={2}>
        <Button
          variant="contained"
          sx={{ background: "#7c4dff" }}
          onClick={() => onAdd(product)}
        >
          Agregar
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default ProductCard;
