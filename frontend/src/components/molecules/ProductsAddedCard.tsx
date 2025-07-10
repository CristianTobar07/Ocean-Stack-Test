import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { Product } from "interfaces/products";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductAddedCard: React.FC<Props> = ({ product, onAdd }) => (
  <Card sx={{ maxHeight: 300 }}>
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2">Precio: ${product.price}</Typography>
      <Typography variant="body2">Cantidad: {product.quantity}</Typography>
      <Stack mt={2}>
        <Button
          variant="contained"
          sx={{ background: "#ef5350" }}
          onClick={() => onAdd(product)}
        >
          Eliminar
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default ProductAddedCard;
