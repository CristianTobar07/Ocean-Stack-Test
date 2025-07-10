import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { Order } from "interfaces/orders";

interface Props {
  order: Order;
  index: number;
  onAdd: (order: Order) => void;
}

const OrderCard: React.FC<Props> = ({ order, index, onAdd }) => (
  <Card sx={{ maxHeight: 300 }}>
    <CardContent>
      <Typography variant="h6">Orden N°: {index}</Typography>
      <Typography variant="body2">
        Fecha: {new Date(order.date).toLocaleDateString()}
      </Typography>
      <Typography variant="body2">Referencia: {order.uid}</Typography>
      <Typography variant="body2">
        Cantidad de Productos: {order.products.length}
      </Typography>
      <Stack mt={2}>
        <Button
          variant="contained"
          sx={{ background: "#7c4dff" }}
          onClick={() => onAdd(order)}
        >
          Ver productos
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default OrderCard;
